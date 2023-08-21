import { Menu, MobileMenu, NavContainer, StyledNavbar } from "./style";
import NavbarLogo from "../../assets/premiercarnavbar.png";
import { StyledText } from "../../styles/typography";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [buttonText, setButtonText] = useState("=");

  const toggleMobileMenu = () => {
    setMobileMenu((open) => !open);
    if (!mobileMenu) {
      setButtonText("x");
    } else {
      setButtonText("=");
    }
  };

  return (
    <StyledNavbar>
      <NavContainer>
        <img src={NavbarLogo} alt="Logo" />
        {mobileMenu ? (
          <MobileMenu>
            <li>
              <a href="/login">
                <StyledText tag="p" type="Body-1-600" color="grey2">
                  Fazer login
                </StyledText>
              </a>
            </li>
            <li>
              <a href="/register">
                <span>Cadastrar</span>
              </a>
            </li>
          </MobileMenu>
        ) : (
          <Menu>
            <li>
              <a href="/login">
                <StyledText tag="p" type="Body-1-600" color="grey2">
                  Fazer Login
                </StyledText>
              </a>
            </li>
            <li>
              <a href="/register">
                <span>Cadastrar</span>
              </a>
            </li>
          </Menu>
        )}
        <button type="button" onClick={toggleMobileMenu}>
          {buttonText}
        </button>
      </NavContainer>
    </StyledNavbar>
  );
};
