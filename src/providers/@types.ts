export interface IDefaultProvidersProps {
    children: React.ReactNode;
}

export interface IUserLoginFormValues {
    email: string;
    password: string;
}

export interface IUserRegisterFormValues {
    name: string;
    email: string;
    cpf: string;
    cellPhone: string;
    birthDate: string;
    description: string;
    accountType: string;
    password: string;
    confirmPassword: string;
}

export interface IUserContextValues {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    userLogin: (formData: IUserLoginFormValues) => Promise<void>;
    user: never[];
    setUser: (value: React.SetStateAction<never[]>) => void;
    userRegister: (formData: IUserRegisterFormValues) => Promise<void>;
    userLogout: () => void;
}
