import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { UserContext } from "../../../providers/UserProvider";
import { StyledForm } from "../styled";
import { IUserRegisterFormValues } from "../../../providers/@types";
import { registerSchema } from "./registerSchema";
import { MenuItem, Select } from "@mui/material";

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserRegisterFormValues>({
        resolver: zodResolver(registerSchema),
    });

    const { userRegister } = useContext(UserContext);

    const submit: SubmitHandler<IUserRegisterFormValues> = (formData) => {
        userRegister(formData);
    };

    return (
        <>
            <StyledForm onSubmit={handleSubmit(submit)}>
                <Input
                    label="Nome"
                    type="text"
                    error={errors.name}
                    register={register("name")}
                />
                <Input
                    label="Email"
                    type="email"
                    error={errors.email}
                    register={register("email")}
                />
                <Input
                    label="cpf"
                    type="text"
                    error={errors.cpf}
                    register={register("cpf")}
                />
                <Input
                    label="Telefone"
                    type="text"
                    error={errors.cellPhone}
                    register={register("cellPhone")}
                />
                <Input
                    label="Data de Nascimento"
                    type="text"
                    error={errors.birthDate}
                    register={register("birthDate")}
                />
                <Input
                    label="Descrição"
                    type="text"
                    error={errors.description}
                    register={register("description")}
                />
                <Select {...register("accountType")} label="Tipo de Conta">
                    <MenuItem value={"comprador"}>Comprador</MenuItem>
                    <MenuItem value={"anunciante"}>Anunciante</MenuItem>
                </Select>
                <Input
                    label="Senha"
                    type="password"
                    error={errors.password}
                    register={register("password")}
                />
                <Input
                    label="Confirmar Senha"
                    type="password"
                    error={errors.password}
                    register={register("confirmPassword")}
                />
                <button type="submit">Cadastrar</button>
            </StyledForm>
        </>
    );
};
