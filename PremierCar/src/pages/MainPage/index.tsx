import { Announcement } from "../../components/Announcement";
import {
  Actions,
  Container,
  LeftMenu,
  ListActions,
  ListAnnouncement,
  Login,
  Logo,
  Main,
  MainContent,
  MainImage,
  Menu,
  Register,
} from "./style";

export const MainPage = () => {
  return (
    <Main>
      <Menu>
        <Logo>{/* <img alt="logo"></img> */}</Logo>
        <Actions>
          <ListActions>
            <li>
              <Login to="/login">Fazer login</Login>
            </li>
            <li>
              <Register to="/register">Cadastrar</Register>
            </li>
          </ListActions>
        </Actions>
      </Menu>
      <MainImage>Imagem</MainImage>
      <Container>
        <LeftMenu>Menu lateral</LeftMenu>
        <MainContent>
          <ListAnnouncement>
            Anuncios
            {/* map dos anúncios cadastrados no banco */}
            <Announcement></Announcement>
          </ListAnnouncement>
        </MainContent>
      </Container>
    </Main>
  );
};
