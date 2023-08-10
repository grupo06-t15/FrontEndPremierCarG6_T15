import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { LeftMenu } from "../../components/LeftMenu";
import { AnnouncementList, Container, FrontAds, Main } from "./style";
import { AnnouncementCard } from "../../components/AnnouncementCard";
import { useEffect } from "react";
import { api } from "../../services/api";
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
        <FrontAds />
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
      </Main>
      <Footer />
    </>
  );
};
