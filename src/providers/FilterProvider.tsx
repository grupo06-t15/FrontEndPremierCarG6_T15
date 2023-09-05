import { createContext, useEffect, useState } from "react";
import { carsApi } from "../services/api";

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
}

interface IModels {
    id: string;
    name: string;
    brand: string;
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

    const showCars = async () => {
        try {
            setLoading(false);
            const response = await carsApi.get("/cars");
            setCars(Object.keys(response.data));

            const modelsResponse = await carsApi.get("/cars?brand=chevrolet");
            setModels(modelsResponse.data);

            const nomes: string[] = Array.from(
                new Set(
                    modelsResponse.data.map(
                        (model: IModels) => model.name.split(" ")[0]
                    )
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

    const filteredBrandCars = async (input: string) => {
        const brandResponse = await carsApi.get(`/cars?brand=${input}`);
        setBrand(input);
       console.log(brandResponse)

        setModels(brandResponse.data);
    };

    //Filtrar com marca e modelo da API da aplicação
    const filteredModelCars = async (input: string) => {
        const modelsResponse = await carsApi.get(
            `/cars?brand=${brand}?models=${input}`
        );
  
       setModels(modelsResponse.data);
    };

    useEffect(() => {
        (async () => {
            await showCars();
        })();
    }, []);

    const filterModels = async (input: string) => {
        const filterResponse = await carsApi.get(`/cars?brand=${input}`);

        setCars([input]);

        const nomes: string[] = Array.from(
            new Set(
                filterResponse.data.map(
                    (model: IModels) => model.name.split(" ")[0]
                )
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
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
