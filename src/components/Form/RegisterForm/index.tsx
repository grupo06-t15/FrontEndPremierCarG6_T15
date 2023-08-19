<<<<<<< HEAD
import { useContext, useState } from "react";
import { StyledForm } from "../styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { TRegisterData, registerSchema } from "./registerSchema";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../providers/UserProvider";
=======
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
>>>>>>> 374dc1bdb74481f85478a4e9cefad13dd2011cdd

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegisterData>({
        resolver: zodResolver(registerSchema),
    });

    const { userRegister } = useContext(UserContext);
    const [selectedAccountType, setSelectedAccountType] =
        useState<string>("comprador");

    const submit: SubmitHandler<TRegisterData> = async (formData) => {
        console.log(formData);
        await userRegister(formData);
    };

    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
            <Input
                label={"Nome"}
                type="text"
                placeholder="Ex: Carlos Junior"
                error={errors.name}
                register={register("name")}
            />
            <Input
                label={"Email"}
                type="email"
                placeholder="Ex: carlosjunior@gmail.com"
                error={errors.email}
                register={register("email")}
            />
            <Input
                label={"cpf"}
                type="text"
                placeholder="000.000.000-00"
                error={errors.cpf}
                register={register("cpf")}
            />
            <Input
                label={"Telefone"}
                type="text"
                placeholder="(DDD) 90000-0000"
                error={errors.cellPhone}
                register={register("cellPhone")}
            />
            <Input
                label={"Data de nascimento"}
                type="text"
                placeholder="00/00/0000"
                error={errors.birthDate}
                register={register("birthDate")}
            />
            <Input
                label={"Descrição"}
                type="text"
                placeholder="Digitar descrição"
                error={errors.description}
                register={register("description")}
            />

            <h2>Informações de endereço</h2>

            <Input
                label={"CEP"}
                type="text"
                placeholder="00000.000"
                error={errors.description}
                register={register("address.cep")}
            />
            <div>
                <Input
                    label={"Estado"}
                    type="text"
                    placeholder="Digitar estado"
                    error={errors.description}
                    register={register("address.state")}
                />
                <Input
                    label={"Cidade"}
                    type="text"
                    placeholder="Digitar cidade"
                    error={errors.description}
                    register={register("address.city")}
                />
            </div>
            <Input
                label={"Rua"}
                type="text"
                placeholder="Digitar rua"
                error={errors.description}
                register={register("address.street")}
            />
            <div>
                <Input
                    label={"Número"}
                    type="text"
                    placeholder="Digitar número"
                    error={errors.description}
                    register={register("address.number")}
                />
                <Input
                    label={"Complemento"}
                    type="text"
                    placeholder="Ex: apart 306"
                    error={errors.description}
                    register={register("address.complement")}
                />
            </div>

            <div>
                <button
                    type="button"
                    onClick={() => setSelectedAccountType("comprador")}
                >
                    Comprador
                </button>
                <button
                    type="button"
                    onClick={() => setSelectedAccountType("anunciante")}
                >
                    Anunciante
                </button>
            </div>
            <Input
                type="hidden"
                value={selectedAccountType}
                label="tipo de conta"
                register={register("accountType")}
            />
            {/* {console.log(selectedAccountType)} */}
            <Input
                label={"Senha"}
                type="password"
                placeholder="Digitar senha"
                error={errors.password}
                register={register("password")}
            />
            <Input
                label={"Confirmar Senha"}
                type="password"
                placeholder="Digitar senha"
                error={errors.password}
                register={register("confirmPassword")}
            />
            <button type="submit">Finalizar Cadastro</button>
        </StyledForm>
    );
};
