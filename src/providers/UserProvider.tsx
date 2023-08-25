import { createContext, useState } from "react";

import {
    IDefaultProvidersProps,
    IUserContextValues,
    IUserLoginFormValues,
    IUserRegisterFormValues,
} from "./@types";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContextValues);

export const UserProvider = ({ children }: IDefaultProvidersProps) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    const navigate = useNavigate();

    const userLogin = async (formData: IUserLoginFormValues) => {
        try {
            const response = await api.post("/session", formData);
            const { token } = response.data;

            localStorage.setItem("@TOKEN", token);
            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            //console.log(token);
            //console.log(response);

            setUser(response.data);
            navigate("/");
            toast.success(`Bem Vindo!`);
        } catch (error) {
            toast.error("Usuário ou senha inválido!");
        }
    };

    const userRegister = async (formData: IUserRegisterFormValues) => {
        try {
            setLoading(true);
            const response = await api.post("/users", formData);
            console.log("testei funCao register");
            setUser(response.data);
            toast.success(`Usuario cadastrado!!`);
            navigate("/");
        } catch (error: any) {
            const errorMessage: string =
                error.response?.data?.message ??
                toast.error("Usuario não cadastrado!");
            toast.error(`${errorMessage}!`);
        } finally {
            setLoading(false);
        }
    };

    const userLogout = () => {
        setUser([]);
        localStorage.removeItem("@TOKEN");
        navigate("/");
    };

    return (
        <UserContext.Provider
            value={{
                loading,
                setLoading,
                userLogin,
                user,
                setUser,
                userRegister,
                userLogout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
