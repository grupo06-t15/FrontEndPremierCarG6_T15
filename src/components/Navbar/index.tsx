import { NavContainer, StyledNavbar } from "./style";
import NavbarLogo from "../../assets/NavbarLogo.png";
import { StyledText } from "../../styles/typography";

export const Navbar = () => {
    return (
        <StyledNavbar>
            <NavContainer>
                <img src={NavbarLogo} alt="Logo" />
                <div>
                    <StyledText tag="p" type="Body-1-600" color="grey2">Fazer Login</StyledText>
                    <button>Cadastrar</button>
                </div>
            </NavContainer>
        </StyledNavbar>
    );
};
