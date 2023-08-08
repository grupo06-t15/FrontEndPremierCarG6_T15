import { NavContainer, StyledNavbar } from "./style";
import NavbarLogo from "../../assets/NavbarLogo.png";

export const Navbar = () => {
    return (
        <StyledNavbar>
            <NavContainer>
                <img src={NavbarLogo} alt="Logo" />
                <div>
                    <p>Fazer Login</p>
                    <button>Cadastrar</button>
                </div>
            </NavContainer>
        </StyledNavbar>
    );
};
