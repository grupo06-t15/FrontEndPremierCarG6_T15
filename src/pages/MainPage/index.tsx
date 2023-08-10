import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { LeftMenu } from "../../components/LeftMenu";
import { Container, FrontAds, Main} from "./style";
import { AnnouncementCard } from "../../components/AnnouncementCard";

export const MainPage = () => {
  return (
    <>
      <Navbar />
      <Main>
        <FrontAds />
        <Container>
          <LeftMenu />
          <AnnouncementCard />
        </Container>
        
        <div className="buttonMobile">
        <button >Filtros</button> 
        <p>1 de 2</p>
        <p>Seguinte </p>
        </div>
      </Main>
      <Footer />
    </>
  );
};
