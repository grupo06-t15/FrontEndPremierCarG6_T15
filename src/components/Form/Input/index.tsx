import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldset, StyledLabel, StyledTextField } from "./style";

interface IInputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    type: "password" | "text" | "email" | "hidden";
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
}

export const Input = ({
    placeholder,
    label,
    type,
    error,
    register,
    value,
}: IInputProps) => {
    return (
        <StyledFieldset>
            <StyledLabel>{label}</StyledLabel>
            <StyledTextField
                placeholder={placeholder}
                value={value}
                type={type}
                {...register}
            />
            {error ? <p>{error.message}</p> : null}
        </StyledFieldset>
    );
};
