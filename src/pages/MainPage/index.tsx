import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { LeftMenu } from "../../components/LeftMenu";
import {  AnnouncementList, Container, FrontAds, Main } from "./style";
import {RiArrowRightSLine} from "react-icons/ri"
import { AnnouncementCard } from "../../components/AnnouncementCard";
// import { useEffect } from "react";
// import { api } from "../../services/api";
//  import { useEffect, useState } from "react";

export const MainPage = () => {
  // Sugestão: colocar aqui um useEffect para buscar do banco os anúncios  e renderizar os cards
  // const [listCars, setListCars] = useState([]);

  // useEffect(() => {
  //   const loadCars = async () => {
  //     const cars = await api.get("/");
  //   };
  //   set;
  // }, []);

  return (
    <>
      <Navbar />
      <Main>
      <FrontAds>
        <div className="addsDiv">
          <h3 >Motors Shop </h3>
          <p > A melhor plataforma<br/>
           de anúncios de carros do país</p>
        </div>
        </FrontAds >
        <Container>
          <LeftMenu />
          <AnnouncementList>
            <AnnouncementCard />
            <AnnouncementCard />
            <AnnouncementCard />
            <AnnouncementCard />
            <AnnouncementCard />
            <AnnouncementCard />
            <AnnouncementCard />
          </AnnouncementList>
        </Container>
        
        <div className="divButtonMobile">
        <button >Filtros</button> 
        <p>1 <span>de 2</span> </p>
        <button className="next">Seguinte <RiArrowRightSLine /> </button>
        </div>
      </Main>
      <Footer />
    </>
  );
};
