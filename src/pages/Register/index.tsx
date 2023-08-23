import { RegisterForm } from "../../components/Form/RegisterForm";
import { RegisterPageContainer, StyledRegisterPage } from "./style";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
// import { Footer } from "../../components/Footer";

export const RegisterPage = () => (
    <RegisterPageContainer>
        <Navbar />
        <StyledRegisterPage>
            <RegisterForm />
        </StyledRegisterPage>
        <Footer />
    </RegisterPageContainer>
);
