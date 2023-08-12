import { NavContainer, StyledNavbar } from "./style";
import NavbarLogo from "../../assets/premiercarnavbar.png";
import { StyledText } from "../../styles/typography";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <NavContainer>
        <img src={NavbarLogo} alt="Logo" />
        <div>
          <a href="/login">
            <StyledText tag="p" type="Body-1-600" color="grey2">
              Fazer Login
            </StyledText>
          </a>
          <a href="/register">
            <button>Cadastrar</button>
          </a>
        </div>
      </NavContainer>
    </StyledNavbar>
  );
};
