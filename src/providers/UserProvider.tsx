import { createContext, useState } from "react";
import {
    IDefaultProvidersProps,
    IUserContextValues,
    IUserLoginFormValues,
} from "./@types";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContextValues);

export const UserProvider = ({ children }: IDefaultProvidersProps) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    const userLogin = async (formData: IUserLoginFormValues) => {
        try {
            const response = await api.post("/client", formData);
            setUser(response.data);
            console.log(user)
        } catch (error) {
            toast.error("Usuario ou senha invalido!");
        }
    };

    return (
        <UserContext.Provider
            value={{ loading, setLoading, userLogin, user, setUser }}
        >
            {children}
        </UserContext.Provider>
    );
};
