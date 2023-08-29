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
    address: {
        cep: string;
        state: string;
        city: string;
        street: string;
        number: string;
        complement: string;
    };
}

export interface IUserContextValues {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userLogin: (formData: IUserLoginFormValues) => Promise<void>;
  user: IUserData;
  setUser: React.Dispatch<React.SetStateAction<IUserData>>;
  userRegister: (formData: IUserRegisterFormValues) => Promise<void>;
  userLogout: () => void;
  retrieveUser: (token: string) => Promise<void>;
}

export interface ICarImages {
    id: string;
    name: string;
    url: string;
}

export interface IAnnounce {
    id: string;
    brand: string;
    model: string;
    year: number;
    fuel: string;
    mileage: number;
    color: string;
    price: number;
    fipePrice: number;
    description: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    images: ICarImages[];
}

export interface IAddress {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
}

export interface IUserData {
    id: string;
    name: string;
    email: string;
    cpf: string;
    cellPhone: string;
    birthDate: string;
    description: string;
    accountType: string;
    registerDate: string;
    updatedAt: string;
    address: IAddress;
    announcements: IAnnounce[];
}

export type TJwtDecoded = {
  userName?: string;
  iat: number;
  exp: number;
  sub: string;
};
