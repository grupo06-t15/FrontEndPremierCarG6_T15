import { useContext, useState } from "react";
import { Announcement, CarData, CarImage, Sale, UserData } from "./style";
import { StyledText } from "../../styles/typography";
import { FilterContext } from "../../providers/FilterProvider";
import { v4 as uuidv4 } from "uuid";

export const AnnouncementCard = () => {
    const [isActive] = useState(true);
    const [isForSale] = useState(false);
    //Pelo Figma, os veículos podem estar ativos ou inativos, e em promoção. Assim, foi criado o isActive e isForSale para aplicar conforme a regra de negócio

    const { models } = useContext(FilterContext);

    return (
        <>
            {models.map((car) => (
                <Announcement key={uuidv4()}>
                    <CarImage>
                        {isActive ? (
                            <StyledText
                                tag="span"
                                type="Body-2-500"
                                color="whiteFixed"
                            >
                                Ativo
                            </StyledText>
                        ) : (
                            <StyledText
                                tag="span"
                                type="Body-2-500"
                                color="whiteFixed"
                            >
                                Inativo
                            </StyledText>
                        )}
                        {isForSale && <Sale>$</Sale>}
                        <img
                            alt="Foto do carro"
                            src="/src/assets/car.svg"
                        ></img>
                    </CarImage>
                    <StyledText tag="h1" type="Heading-7-600" color="grey1">
                        {car.brand.charAt(0).toUpperCase() +
                            car.brand.substr(1) +
                            " - " +
                            car.name.split(" ")[0].charAt(0).toUpperCase() +
                            car.name.split(" ")[0].substr(1)}
                    </StyledText>
                    <StyledText tag="p" type="Body-2-400" color="grey2">
                        {car.name.charAt(0).toUpperCase() + car.name.substr(1)}
                    </StyledText>
                    <UserData>
                        <StyledText tag="span" type="Body-2-500" color="brand1">
                            Us
                        </StyledText>
                        <StyledText tag="p" type="Body-2-500" color="grey2">
                            Usuario 
                        </StyledText>
                    </UserData>
                    <CarData>
                        <div>
                            <StyledText
                                tag="span"
                                type="Body-2-500"
                                color="brand1"
                            >
                                0 KM
                            </StyledText>
                            <StyledText
                                tag="span"
                                type="Body-2-500"
                                color="brand1"
                            >
                                {car.year}
                            </StyledText>
                        </div>
                        <StyledText
                            tag="span"
                            type="Heading-7-500"
                            color="grey1"
                        >
                            {" "}
                            {car.value.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </StyledText>
                    </CarData>
                </Announcement>
            ))}
        </>
    );
};
