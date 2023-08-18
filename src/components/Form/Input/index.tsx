import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledLabel, StyledTextField } from "./style";

interface IInputProps {
    label: string;
    placeholder: string;
    type: "password" | "text" | "email";
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
}

export const Input = ({ placeholder, label, type, error, register }: IInputProps) => {
    return (
        <fieldset>
            <StyledLabel>{label}</StyledLabel>
            <StyledTextField placeholder={placeholder} type={type} {...register} />
            {error ? <p>{error.message}</p> : null}
        </fieldset>
    );
};
