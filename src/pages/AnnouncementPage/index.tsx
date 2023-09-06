import { useContext } from "react";
import {
	AnnoucementData,
	AnnouncementDescription,
	AnnouncementImage,
	ButtonBuy,
	Data,
	MainContainer,
} from "./style";
import { Navbar } from "../../components/Navbar";
import { PurpleBox } from "../AdvertiserPage/styled";
import { Footer } from "../../components/Footer";
import { useLocation } from "react-router-dom";
import { StyledText } from "../../styles/typography";

export const AnnouncementPage = () => {
	const location = useLocation();
	const { from } = location.state;

	const sendMessage = () => {
		const number = from.user.cellPhone
			.replace(/[^\w\s]/gi, "")
			.replace(/ /g, "");

		let url = `https://web.whatsapp.com/send?phone=${number}`;

		url += `&text=${encodeURI(
			`Olá! Gostaria de mais informações sobre o anúcio do veículo ${from.model}`
		)}&app_absent=0`;

		window.open(url);
	};

	return (
		<>
			<MainContainer>
				<Navbar />
				<PurpleBox />
				<AnnouncementImage>
					<img alt="Foto do carro" src={from.images[0].url}></img>
				</AnnouncementImage>
				<AnnoucementData>
					<StyledText tag="h1" type="Heading-7-600" color="grey1">
						{from.brand.charAt(0).toUpperCase() +
							from.brand.substr(1) +
							" - " +
							from.model}
					</StyledText>
					<Data>
						<div>
							<StyledText tag="span" type="Body-2-500" color="brand1">
								{from.mileage} KM
							</StyledText>
							<StyledText tag="span" type="Body-2-500" color="brand1">
								{from.year}
							</StyledText>
						</div>
						<StyledText tag="span" type="Heading-7-500" color="grey1">
							{" "}
							{from.price.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</StyledText>
					</Data>
					<ButtonBuy onClick={() => sendMessage()}>
						<StyledText tag="p" type="Body-2-500" color="whiteFixed">
							Comprar
						</StyledText>
					</ButtonBuy>
				</AnnoucementData>
				<AnnouncementDescription>
					<StyledText tag="h1" type="Heading-7-600" color="grey1">
						Descrição
					</StyledText>
					<StyledText tag="p" type="Body-2-400" color="grey2">
						{from.description}
					</StyledText>
				</AnnouncementDescription>
				{/* LISTAR E CRIAR COMENTÁRIOS */}
				<Footer />
			</MainContainer>
		</>
	);
};
