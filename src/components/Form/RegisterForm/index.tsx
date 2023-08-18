import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { UserContext } from "../../../providers/UserProvider";
import { EnterButton, StyledForm } from "../styled";
import { IUserRegisterFormValues } from "../../../providers/@types";
import { registerSchema } from "./registerSchema";
import { MenuItem, Select } from "@mui/material";
import { StyledText } from "../../../styles/typography";

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
                <StyledText tag="h1" type="Heading-5-500" color="grey0">
                    Cadastro
                </StyledText>
                <StyledText tag="p" type="Body-2-500" color="grey0">
                    Informações pessoais
                </StyledText>
                <Input label="Nome" placeholder="Ex: Samuel Leão" type="text" error={errors.name} register={register("name")} />
                <Input label="Email" placeholder="Ex: samuel@kenzie.com.br" type="email" error={errors.email} register={register("email")} />
                <Input label="CPF" placeholder="Ex: 000.000.000-00" type="text" error={errors.cpf} register={register("cpf")} />
                <Input label="Telefone" placeholder="Ex: (DD) 00000-0000" type="text" error={errors.cellPhone} register={register("cellPhone")} />
                <Input label="Data de Nascimento" placeholder="Ex: 00/00/00" type="text" error={errors.birthDate} register={register("birthDate")} />
                <Input label="Descrição" placeholder="Digitar descrição" type="text" error={errors.description} register={register("description")} />
                <Select {...register("accountType")} label="Tipo de Conta">
                    <MenuItem value={"comprador"}>Comprador</MenuItem>
                    <MenuItem value={"anunciante"}>Anunciante</MenuItem>
                </Select>
                <Input label="Senha" placeholder="Digitar senha" type="password" error={errors.password} register={register("password")} />
                <Input label="Confirmar Senha" placeholder="Digitar senha" type="password" error={errors.password} register={register("confirmPassword")} />
                <EnterButton type="submit">Finalizar cadastro</EnterButton>
            </StyledForm>
        </>
    );
};
