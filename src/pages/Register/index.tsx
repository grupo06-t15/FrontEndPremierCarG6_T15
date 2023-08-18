import { RegisterPageContainer, StyledRegisterPage } from "./style";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const RegisterPage = () => (
    <RegisterPageContainer>
        <Navbar />
        <StyledRegisterPage>
            <RegisterForm />
        </StyledRegisterPage>
        <Footer />
    </RegisterPageContainer>
);
