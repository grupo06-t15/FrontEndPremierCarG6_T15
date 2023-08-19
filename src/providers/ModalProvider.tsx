import { createContext, useState } from "react";

export interface IModalProviderProps {
    children: React.ReactNode;
}

export interface IModalContext {
    modalType: string;
    setModalType: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: IModalProviderProps) => {
    const [modalType, setModalType] = useState<string>("");
    return (
        <ModalContext.Provider value={{ modalType, setModalType }}>
            {children}
        </ModalContext.Provider>
    );
};
