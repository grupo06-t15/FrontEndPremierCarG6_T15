import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Menu, MobileMenu, NavContainer, StyledNavbar } from "./style";
import NavbarLogo from "../../assets/premiercarnavbar.png";
import { StyledText } from "../../styles/typography";
import { api } from "../../services/api";
import { IUserRegisterFormValues } from "../../providers/@types";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [buttonText, setButtonText] = useState("=");
  const [userData, setUserData] = useState<IUserRegisterFormValues | null>();

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUserData() {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        const decoded: string = jwt_decode(token!);

        const foundUser = await api.get(`/users/${decoded.sub!}`);

        setUserData(foundUser.data);
      }
    }
    loadUserData();
  }, []);
  console.log(userData);

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
        <img src={NavbarLogo} alt="Logo" onClick={() => navigate("/")} />
        {mobileMenu ? (
          <MobileMenu>
            {/* {userData && <h1>{userData.name}</h1>} */}
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
            {/* {userData && <h1>{userData.name}</h1>} */}
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
