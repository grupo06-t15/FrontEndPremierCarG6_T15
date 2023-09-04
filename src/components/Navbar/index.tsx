import jwt_decode from 'jwt-decode';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarLogo from '../../assets/premiercarnavbar.png';
import { IUserRegisterFormValues } from '../../providers/@types';
import { UserContext } from '../../providers/UserProvider';
import { api } from '../../services/api';
import { StyledText } from '../../styles/typography';
import { UserInfos } from '../UserInfos';
import { Menu, MobileMenu, NavContainer, StyledNavbar } from './style';
import { FiLogOut } from 'react-icons/fi';

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [buttonText, setButtonText] = useState('=');
  const [userData, setUserData] = useState<IUserRegisterFormValues | null>();
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');

    async function loadUserData() {
      if (token) {
        const decoded: string = jwt_decode(token!);
        const foundUser = await api.get(`/users/${decoded.sub!}`, {
          headers: {
            'Content-Type': 'application/json',

            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(foundUser.data);
        setUser(foundUser.data);
      }
    }
    loadUserData();
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenu((open) => !open);
    if (!mobileMenu) {
      setButtonText('x');
    } else {
      setButtonText('=');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('@TOKEN')

    setUserData(null)
    navigate('/')
  }

  return (
    <StyledNavbar>
      <NavContainer>
        <img src={NavbarLogo} alt="Logo" onClick={() => navigate('/')} />
        {mobileMenu ? (
          !localStorage.getItem('@TOKEN') ? (
            <MobileMenu>
              <li>
                <a href="/login">
                  <StyledText tag="p" type="Body-1-600" color="grey2">
                    Fazer login
                  </StyledText>
                </a>
              </li>
              <li key={'register'}>
                <a href="/register">
                  <span>Cadastrar</span>
                </a>
              </li>
            </MobileMenu>
          ) : (
            <MobileMenu>
              <UserInfos userName={userData?.name} />
              <button onClick={handleLogout}>
                <FiLogOut />
              </button>
            </MobileMenu>
          )
        ) : !localStorage.getItem('@TOKEN') ? (
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
        ) : (
          <Menu>
            <UserInfos userName={userData?.name} />
            <button onClick={handleLogout}>
              <FiLogOut />
            </button>
          </Menu>
        )}
        <button type="button" onClick={toggleMobileMenu}>
          {buttonText}
        </button>
      </NavContainer>
    </StyledNavbar>
  );
};
