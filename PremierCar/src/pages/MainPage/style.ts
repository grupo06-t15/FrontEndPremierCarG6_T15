import styled from "styled-components";
import { Link } from "react-router-dom";
// import logo from "../../assets/Logo.png";
import content from "../../assets/Content.svg";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-around;
  height: 3rem;
  background-color: var(whiteFixed);
`;

export const Logo = styled.div`
  > img {
    width: 100%;
    background-image: url();
  }
`;

export const Actions = styled.div`
  display: flex;
`;

export const ListActions = styled.ul`
  > li {
  }
`;

export const Login = styled(Link)``;

export const Register = styled(Link)``;

export const MainImage = styled.header`
  > img {
    background-image: url(${content});
  }
`;

export const Container = styled.div``;

export const LeftMenu = styled.aside``;

export const MainContent = styled.section``;

export const ListAnnouncement = styled.ul``;
