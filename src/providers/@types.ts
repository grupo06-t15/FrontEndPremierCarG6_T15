export interface IDefaultProvidersProps {
    children: React.ReactNode;
}

export interface IUserLoginFormValues {
    email: string;
    password: string;
}

export interface IUserContextValues {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    userLogin: (formData: IUserLoginFormValues) => Promise<void>;
}
