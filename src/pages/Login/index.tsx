import { Link } from "react-router-dom";
import { StyledContainer, StyledGridBox } from "../../styles/grid";
import { StyledLoginPage } from "./style";
import { LoginForm } from "../../components/Form/LoginForm";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const LoginPage = () => (
    <StyledLoginPage>
        <Navbar />
        <StyledContainer>
            <div className="flexGrid">
                <StyledGridBox className="formBox">
                    <h2>Login</h2>
                    <LoginForm />
                    <p>Esqueci minha senha</p>
                    <h3>Ainda não possui conta ?</h3>
                    <Link to="/register">Cadastrar</Link>
                </StyledGridBox>
            </div>
        </StyledContainer>
        <Footer />
    </StyledLoginPage>
);
