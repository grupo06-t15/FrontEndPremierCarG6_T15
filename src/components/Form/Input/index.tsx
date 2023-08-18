import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldset, StyledLabel, StyledTextField } from "./style";

interface IInputProps {
    label: string;
    placeholder: string;
    type: "password" | "text" | "email";
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
}

export const Input = ({ placeholder, label, type, error, register }: IInputProps) => {
    return (
        <StyledFieldset>
            <StyledLabel>{label}</StyledLabel>
            <StyledTextField placeholder={placeholder} type={type} {...register} />
            {error ? <p>{error.message}</p> : null}
        </StyledFieldset>
    );
};
