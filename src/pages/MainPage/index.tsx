import { useContext } from "react";
import { AnnouncementCard } from "../../components/AnnouncementCard";
import { Footer } from "../../components/Footer";
import { LeftMenu } from "../../components/LeftMenu";
import { Navbar } from "../../components/Navbar";
import {
	AnnouncementList,
	Container,
	FrontAds,
	Main,
	MainPageContainer,
} from "./style";
import { FilterContext } from "../../providers/FilterProvider";
import { StyledText } from "../../styles/typography";

export const MainPage = () => {
	const { carsAPI } = useContext(FilterContext);

	return (
		<MainPageContainer>
			<Navbar />
			<Main>
				<FrontAds>
					<div className="addsDiv">
						<h3>Motors Shop </h3>
						<p>
							{" "}
							A melhor plataforma de
							<br />
							anúncios de carros do país
						</p>
					</div>
				</FrontAds>
				<Container>
					<LeftMenu />
					<AnnouncementList>
						{carsAPI.length < 1 ? (
							<StyledText tag="p" type="Heading-5-600" color="brand1">
								Não existe nenhum anúncio disponível
							</StyledText>
						) : (
							<AnnouncementCard />
						)}
					</AnnouncementList>
				</Container>

				<div className="divButtonMobile">
					<button>Filtros</button>
				</div>
			</Main>
			<Footer />
		</MainPageContainer>
	);
};
