import { useState } from "react";
import {
  Active,
  Announcement,
  CarData,
  CarImage,
  Inactive,
  Sale,
  UserData,
} from "./style";

export const AnnouncementCard = () => {
  const [isActive, setIsActive] = useState(true);
  const [isForSale, setIsForSale] = useState(false);
  const value = 10000;

  return (
    <Announcement>
      <CarImage>
        {isActive ? <Active>Ativo</Active> : <Inactive>Inativo</Inactive>}
        {isForSale && <Sale>$</Sale>}
        <img alt="Foto do carro" src="/src/assets/car.svg"></img>
      </CarImage>
      <h3>Marca & Modelo</h3>
      <p>Descrição</p>
      <UserData>
        <span>EK</span>
        <p>Eduardo Kucek</p>
      </UserData>
      <CarData>
        <div>
          <span>30.000 KM</span>
          <span>2023</span>
        </div>
        <span>
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </CarData>
    </Announcement>
  );
};
