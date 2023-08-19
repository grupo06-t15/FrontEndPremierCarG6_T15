import { StyledContainer, StyledGridBox } from "../../styles/grid";
import { StyledRegisterPage } from "./style";
import { RegisterForm } from "../../components/Form/RegisterForm";
// import { Footer } from "../../components/Footer";

export const RegisterPage = () => (
    <StyledRegisterPage>
        <StyledContainer>
            <div className="flexGrid">
                <div className="left">
                    <StyledGridBox className="formBox">
                        <h2>Cadastro</h2>
                        <h3>informações pessoais</h3>
                        <RegisterForm />
                        <p>Crie sua conta gratis!!</p>
                    </StyledGridBox>
                </div>
            </div>
        </StyledContainer>
        {/* <Footer /> */}
    </StyledRegisterPage>
);
