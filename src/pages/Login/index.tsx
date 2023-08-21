import { LoginPageContainer, StyledLoginPage } from "./style";
import { LoginForm } from "../../components/Form/LoginForm";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const LoginPage = () => (
    <LoginPageContainer>
        <Navbar />
        <StyledLoginPage>
            <LoginForm />
        </StyledLoginPage>
        <Footer />
    </LoginPageContainer>
);
