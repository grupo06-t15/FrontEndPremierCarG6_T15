import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface IChildren {
	children: React.ReactNode;
}

export interface IFilterContextValues {
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	showCarsAPI: () => Promise<void>;
	carsAPI: IModels[];
	setCarsAPI: React.Dispatch<React.SetStateAction<IModels[]>>;
	modelsAPI: string[];
	setModelsAPI: React.Dispatch<React.SetStateAction<string[]>>;
	brandsAPI: string[];
	setBrandsAPI: (value: React.SetStateAction<string[]>) => void;
	yearsAPI: string[];
	setYearsAPI: React.Dispatch<React.SetStateAction<string[]>>;
	fuelsAPI: string[];
	setFuelsAPI: React.Dispatch<React.SetStateAction<string[]>>;
	colorsAPI: string[];
	setColorsAPI: React.Dispatch<React.SetStateAction<string[]>>;

	filteredBrandsCarsAPI: (input: string) => Promise<void>;
	filteredModelsCarsAPI: (input: string) => Promise<void>;
	filteredModelCarsAPI: (input: string) => Promise<void>;
}

interface IModels {
	id: string;
	name: string;
	brand: string;
	model: string;
	year: string;
	fuel: number;
	price: number;
	color: string;
}

export const FilterContext = createContext({} as IFilterContextValues);

export const FilterProvider = ({ children }: IChildren) => {
	const [loading, setLoading] = useState(true);
	const [carsAPI, setCarsAPI] = useState<IModels[]>([]);
	const [brandsAPI, setBrandsAPI] = useState<string[]>([]);
	const [modelsAPI, setModelsAPI] = useState<string[]>([]);
	const [yearsAPI, setYearsAPI] = useState<string[]>([]);
	const [fuelsAPI, setFuelsAPI] = useState<string[]>([]);
	const [colorsAPI, setColorsAPI] = useState<string[]>([]);

	useEffect(() => {
		(async () => {
			await showCarsAPI();
		})();
	}, []);

	const showCarsAPI = async () => {
		try {
			setLoading(false);

			const response = await api.get("/announcements");
			setCarsAPI(response.data);

			const brands: string[] = Array.from(
				new Set(response.data.map((car: IModels) => car.brand))
			);
			setBrandsAPI(brands);

			const models: string[] = Array.from(
				new Set(response.data.map((car: IModels) => car.model.split(" ")[0]))
			);
			setModelsAPI(models);

			const colors: string[] = Array.from(
				new Set(response.data.map((car: IModels) => car.color.split(" ")[0]))
			);
			setColorsAPI(colors);

			const years: string[] = Array.from(
				new Set(response.data.map((model: IModels) => model.year))
			);
			setYearsAPI(years);

			const fuels = Array.from(
				new Set(response.data.map((car: IModels) => car.fuel))
			);

			const typeFuels: string[] = [];
			fuels.map((nameFuel) => {
				if (nameFuel == "flex") {
					typeFuels.push("Flex");
				} else if (nameFuel == "hibrido") {
					typeFuels.push("Híbrido");
				} else if (nameFuel == "elétrico") {
					typeFuels.push("Elétrico");
				}
			});
			setFuelsAPI(typeFuels);
		} catch (error) {
			console.log(error);
		}
	};

	const filteredBrandsCarsAPI = async (input: string) => {
		setBrandsAPI([input]);
	};

	const filteredModelsCarsAPI = async (input: string) => {
		const modelsFilter = carsAPI.filter((car: IModels) =>
			car.brand.toLowerCase().includes(input.toLowerCase())
		);

		const listModels: string[] = [];

		modelsFilter.map((car) => listModels.push(car.model));

		if (listModels.length == 0) {
			listModels.push(input);
		}

		setModelsAPI(listModels);
		setCarsAPI(modelsFilter);
	};

	const filteredModelCarsAPI = async (input: string) => {
		console.log(input);

		const filteredModel = carsAPI.filter((car: IModels) =>
			car.model.toLowerCase().includes(input.toLowerCase())
		);
		console.log(filteredModel);

		setModelsAPI([input]);
		setBrandsAPI([filteredModel[0].brand]);
		setCarsAPI(filteredModel);
	};

	return (
		<FilterContext.Provider
			value={{
				loading,
				setLoading,
				showCarsAPI,
				carsAPI,
				setCarsAPI,
				modelsAPI,
				setModelsAPI,
				yearsAPI,
				setYearsAPI,
				fuelsAPI,
				setFuelsAPI,
				brandsAPI,
				setBrandsAPI,
				colorsAPI,
				setColorsAPI,
				filteredBrandsCarsAPI,
				filteredModelsCarsAPI,
				filteredModelCarsAPI,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
