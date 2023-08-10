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
import { StyledText } from "../../styles/typography";

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
      <StyledText tag="h1" type="Heading-7-600" color="grey1">
        Marca & Modelo
      </StyledText>
      <StyledText tag="p" type="Body-2-400" color="grey2">
        Descrição
      </StyledText>
      <UserData>
        <StyledText tag="span" type="Body-2-500" color="brand1">
          EK
        </StyledText>
        <StyledText tag="p" type="Body-2-500" color="grey2">
          Eduardo Kucek
        </StyledText>
      </UserData>
      <CarData>
        <div>
          <StyledText tag="span" type="Body-2-500" color="brand1">
            30.000 KM
          </StyledText>
          <StyledText tag="span" type="Body-2-500" color="brand1">
            2023
          </StyledText>
        </div>
        <StyledText tag="span" type="Heading-7-500" color="grey1">
          {" "}
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledText>
      </CarData>
    </Announcement>
  );
};
