import { createContext, useEffect, useState } from "react";
import { api, carsApi } from "../services/api";
import { IAnnounce } from "./@types";

interface IChildren {
	children: React.ReactNode;
}

export interface IFilterContextValues {
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	cars: string[];
	setCars: (value: React.SetStateAction<string[]>) => void;
	models: IModels[];
	setModels: (value: React.SetStateAction<IModels[]>) => void;
	names: string[];
	setNames: React.Dispatch<React.SetStateAction<string[]>>;
	years: string[];
	setYears: React.Dispatch<React.SetStateAction<string[]>>;
	fuels: string[];
	setFuels: React.Dispatch<React.SetStateAction<string[]>>;
	filterModels: (input: string) => void;
	filteredBrandCars: (input: string) => void;
	filteredModelCars: (input: string) => void;
	showCars: () => Promise<void>;

	carsAPI: IAnnounce[];
	setCarsAPI: React.Dispatch<React.SetStateAction<IAnnounce[]>>;
	modelsAPI: IAnnounce[];
	setModelsAPI: React.Dispatch<React.SetStateAction<IAnnounce[]>>;
}

interface IModels {
	id: string;
	name: string;
	brand: string;
	model: string;
	year: string;
	fuel: number;
	value: number;
}

export const FilterContext = createContext({} as IFilterContextValues);

export const FilterProvider = ({ children }: IChildren) => {
	const [loading, setLoading] = useState(true);
	const [cars, setCars] = useState<string[]>([]);
	const [models, setModels] = useState<IModels[]>([]);
	const [names, setNames] = useState<string[]>([]);
	const [years, setYears] = useState<string[]>([]);
	const [fuels, setFuels] = useState<string[]>([]);
	const [brand, setBrand] = useState<string>("");

	const [carsAPI, setCarsAPI] = useState<IAnnounce[]>([]);
	const [modelsAPI, setModelsAPI] = useState<IAnnounce[]>([]);
	const [namesAPI, setNamesAPI] = useState<string[]>([]);
	const [yearsAPI, setYearsAPI] = useState<string[]>([]);
	const [fuelsAPI, setFuelsAPI] = useState<string[]>([]);
	const [brandAPI, setBrandAPI] = useState<string>("");

	useEffect(() => {
		(async () => {
			await showCars();
			await showCarsAPI();
		})();
	}, []);

	const showCars = async () => {
		try {
			setLoading(false);
			const response = await carsApi.get("/cars");
			setCars(Object.keys(response.data));

			const modelsResponse = await carsApi.get("/cars?brand=chevrolet");
			setModels(modelsResponse.data);

			const nomes: string[] = Array.from(
				new Set(
					modelsResponse.data.map((model: IModels) => model.name.split(" ")[0])
				)
			);
			setNames(nomes);

			const anos: string[] = Array.from(
				new Set(modelsResponse.data.map((model: IModels) => model.year))
			);
			setYears(anos);

			const combustivel = Array.from(
				new Set(modelsResponse.data.map((model: IModels) => model.fuel))
			);
			const nomeDosCombustiveis: string[] = [];
			combustivel.map((nomeCombustivel) => {
				if (nomeCombustivel == 1) {
					nomeDosCombustiveis.push("Flex");
				} else if (nomeCombustivel == 2) {
					nomeDosCombustiveis.push("Híbrido");
				} else if (nomeCombustivel == 3) {
					nomeDosCombustiveis.push("Elétrico");
				}
			});
			setFuels(nomeDosCombustiveis);
		} catch (error) {
			console.log(error);
		}
	};

	const showCarsAPI = async () => {
		try {
			setLoading(false);

			const response = await api.get("/announcements");
			setCarsAPI(response.data);

			const names: string[] = Array.from(
				new Set(
					response.data.map((model: IModels) => model.model.split(" ")[0])
				)
			);
			setNamesAPI(names);

			const years: string[] = Array.from(
				new Set(response.data.map((model: IModels) => model.year))
			);
			setYearsAPI(years);

			const fuel = Array.from(
				new Set(response.data.map((model: IModels) => model.fuel))
			);

			const nameFuels: string[] = [];
			fuel.map((nameFuel) => {
				if (nameFuel == "flex") {
					nameFuels.push("Flex");
				} else if (nameFuel == "hibrido") {
					nameFuels.push("Híbrido");
				} else if (nameFuel == "elétrico") {
					nameFuels.push("Elétrico");
				}
			});
			setFuelsAPI(nameFuels);
		} catch (error) {
			console.log(error);
		}
	};

	const filteredBrandCars = async (input: string) => {
		const brandResponse = await carsApi.get(`/cars?brand=${input}`);
		setBrand(input);
		setModels(brandResponse.data);
	};

	//Filtrar com marca e modelo da API da aplicação
	const filteredModelCars = async (input: string) => {
		const Response = await carsApi.get(`/cars?brand=${brand}`);
		const carFilter = await Response.data.filter((car: any) =>
			car.name.toLowerCase().includes(input.toLowerCase())
		);

		setModels(carFilter);
	};

	const filterModels = async (input: string) => {
		const filterResponse = await carsApi.get(`/cars?brand=${input}`);

		setCars([input]);

		const nomes: string[] = Array.from(
			new Set(
				filterResponse.data.map((model: IModels) => model.name.split(" ")[0])
			)
		);
		setNames(nomes);

		const anos: string[] = Array.from(
			new Set(filterResponse.data.map((model: IModels) => model.year))
		);
		setYears(anos);

		const combustivel = Array.from(
			new Set(filterResponse.data.map((model: IModels) => model.fuel))
		);
		const nomeDosCombustiveis: string[] = [];
		combustivel.map((nomeCombustivel) => {
			if (nomeCombustivel == 1) {
				nomeDosCombustiveis.push("Flex");
			} else if (nomeCombustivel == 2) {
				nomeDosCombustiveis.push("Híbrido");
			} else if (nomeCombustivel == 3) {
				nomeDosCombustiveis.push("Elétrico");
			}
		});
		setFuels(nomeDosCombustiveis);
	};

	return (
		<FilterContext.Provider
			value={{
				loading,
				setLoading,
				cars,
				setCars,
				models,
				setModels,
				names,
				setNames,
				years,
				setYears,
				fuels,
				setFuels,
				showCars,
				filterModels,
				filteredBrandCars,
				filteredModelCars,
				carsAPI,
				setCarsAPI,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
