import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginData, loginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";

import { UserContext } from "../../providers/UserProvider";
import { StyledForm } from "./styled";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    });

    const { userLogin } = useContext(UserContext);

    const submit: SubmitHandler<LoginData> = (formData) => {
        userLogin(formData);
    };

    return (
        <>
            <StyledForm onSubmit={handleSubmit(submit)}>
                <Input
                    label="Email"
                    type="email"
                    error={errors.email}
                    register={register("email")}
                />
                <Input
                    label="Senha"
                    type="password"
                    error={errors.password}
                    register={register("password")}
                />
                <button type="submit">Login</button>
            </StyledForm>
        </>
    );
};
