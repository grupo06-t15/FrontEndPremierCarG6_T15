import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AdvertiseCard } from "../../components/AdvertiseCard";
import { AdvertiserInformation } from "../../components/AdvertiserInformation";
import { CreateAnnouceModal } from "../../components/CreateAnnounceModal";
import { Footer } from "../../components/Footer";
import { ModalContainer } from "../../components/ModalContainer";
import { Navbar } from "../../components/Navbar";
import { ModalContext } from "../../providers/ModalProvider";
import { UserContext } from "../../providers/UserProvider";
import { AnnounceList, MainContainer, PurpleBox } from "./styled";

export const AdvertiserPage = () => {
	const { modalType } = useContext(ModalContext);
	const { user, currentUser, retrieveUser } = useContext(UserContext);
	const { name } = useParams();

	const definePageType = (): string => {
		const urlUserName = name?.replace("_", " ");

		if (urlUserName === user.name) {
			return "private";
		}

		return "public";
	};

	useEffect(() => {
		retrieveUser(localStorage.getItem("@PUBLIC_USER_ID")!);
	});

	return (
		<MainContainer>
			<Navbar />
			<PurpleBox />
			<AdvertiserInformation
				user={definePageType() === "private" ? user : currentUser}
				pageType={definePageType()}
			/>
			<AnnounceList>
				{definePageType() === "private"
					? user.announcements?.map((announce) => (
							<AdvertiseCard
								announce={announce}
								key={announce.id}
								pageType={definePageType()}
							/>
					  ))
					: currentUser.announcements
							?.filter((announce) => announce.published)
							.map((announce) => (
								<AdvertiseCard
									announce={announce}
									key={announce.id}
									pageType={definePageType()}
								/>
							))}
			</AnnounceList>
			<Footer />
			{modalType == "createAnnounce" && (
				<ModalContainer>
					<CreateAnnouceModal />
				</ModalContainer>
			)}
		</MainContainer>
	);
};
