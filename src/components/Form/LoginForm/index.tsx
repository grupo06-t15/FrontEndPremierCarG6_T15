import { SubmitHandler, useForm } from "react-hook-form";
import { LoginData, loginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { ButtonsContainer, EnterButton, FieldsetContainer, FormContainer, StyledForm } from "../styled";
import { Input } from "../Input";
import { StyledText } from "../../../styles/typography";
import { Link } from "react-router-dom";

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
                <StyledText tag="h1" type="Heading-5-500" color="grey0">
                    Login
                </StyledText>
                <FormContainer>
                    <FieldsetContainer>
                        <Input label={"Email"} placeholder="Digitar email" type="email" error={errors.email} register={register("email")} />
                        <Input label={"Senha"} placeholder="Digitar senha" type="password" error={errors.password} register={register("password")} />
                        <StyledText className="forgotPassword" tag="p" type="Body-2-500" color="grey2">
                            Esqueci minha senha
                        </StyledText>
                    </FieldsetContainer>
                    <ButtonsContainer>
                        <EnterButton type="submit">Entrar</EnterButton>
                        <StyledText className="registerAcc" tag="p" type="Body-2-400" color="grey2">
                            Ainda não possui conta ?
                        </StyledText>
                        <Link className="registerButton" to="/register">
                            Cadastrar
                        </Link>
                    </ButtonsContainer>
                </FormContainer>
            </StyledForm>
        </>
    );
};
