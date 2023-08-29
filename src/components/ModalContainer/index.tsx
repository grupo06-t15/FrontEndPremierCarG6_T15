import { ReactNode } from "react";
import { GeneralModalContainer } from "./styled";

interface IModalContainerProps {
    children: ReactNode;
}

export const ModalContainer = ({ children }: IModalContainerProps) => {
    return <GeneralModalContainer>{children}</GeneralModalContainer>;
};
