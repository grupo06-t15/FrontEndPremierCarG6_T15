import { createContext, useState } from "react";

import { isAxiosError } from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

import {
  IDefaultProvidersProps,
  IUserContextValues,
  IUserData,
  IUserLoginFormValues,
  IUserRegisterFormValues,
  TJwtDecoded,
} from "./@types";

export const UserContext = createContext({} as IUserContextValues);

export const UserProvider = ({ children }: IDefaultProvidersProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUserData>({} as IUserData);

  const navigate = useNavigate();

  const retrieveUser = async () => {
    try {
      const userId = jwt_decode<TJwtDecoded>(
        localStorage.getItem("@TOKEN")!
      ).sub;
      const response = await api.get<IUserData>(`/users/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message);
      }
    }
  };

  const userLogin = async (formData: IUserLoginFormValues) => {
    try {
      const response = await api.post("/session", formData);
      const { token } = response.data;

      localStorage.setItem("@TOKEN", token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      //console.log(token);
      //console.log(response);
      // setUser(response.data);
      //await retrieveUser();

      navigate("/");

      toast.success(`Bem Vindo!`);
    } catch (error) {
      toast.error("Usuário ou senha inválido!");
    }
  };

  const userRegister = async (formData: IUserRegisterFormValues) => {
    try {
      setLoading(true);
      console.log("FRONT: ENTROU NO TRY");

      delete formData.confirmPassword;

      await api.post("/users", formData);

      console.log("testei funCao register");

      // setUser(response.data);
      toast.success(`Usuario cadastrado!!`);
      navigate("/");
    } catch (error: any) {
      console.log("FRONT: ENTROU NO CATCH");
      console.log(error.response);

      const errorMessage: string =
        error.response?.data?.message ?? toast.error("Usuario não cadastrado!");
      toast.error(`${errorMessage}!`);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser({} as IUserData);

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
        retrieveUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
