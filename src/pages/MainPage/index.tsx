import { RiArrowRightSLine } from "react-icons/ri";
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

export const MainPage = () => {
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
						<AnnouncementCard />
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
