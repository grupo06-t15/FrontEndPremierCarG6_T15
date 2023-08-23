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
  user: never[];
  setUser: (value: React.SetStateAction<never[]>) => void;
  userRegister: (formData: IUserRegisterFormValues) => Promise<void>;
  userLogout: () => void;
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
