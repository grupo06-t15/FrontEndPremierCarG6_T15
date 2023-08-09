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

    const showCars = async () => {
        try {
            setLoading(false);
            const response = await carsApi.get("/cars");
            setCars(Object.keys(response.data));

            const modelsResponse = await carsApi.get("/cars?brand=toyota");
            setModels(modelsResponse.data);

            const nomes: string[] = Array.from(new Set(modelsResponse.data.map((model: IModels) => model.name.split(" ")[0])));
            setNames(nomes);

            const anos: string[] = Array.from(new Set(modelsResponse.data.map((model: IModels) => model.year)));
            setYears(anos);

            const combustivel = Array.from(new Set(modelsResponse.data.map((model: IModels) => model.fuel)));
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

    useEffect(() => {
        (async () => {
            await showCars();
        })();
    }, []);

    return (
        <FilterContext.Provider value={{ loading, setLoading, cars, setCars, models, setModels, names, setNames, years, setYears, fuels, setFuels, showCars }}>
            {children}
        </FilterContext.Provider>
    );
};
