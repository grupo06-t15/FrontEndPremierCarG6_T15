import { useContext } from "react";
import { IAnnounce } from "../../providers/@types";
import {
	AnnouceDescription,
	AnnounceBtnContainer,
	AnnounceCardContainer,
	AnnounceImageContainer,
	AnnounceStatus,
	AnnounceTitle,
	PriceContainer,
} from "./styled";
import { ModalContext } from "../../providers/ModalProvider";

interface AdvertiseCardProps {
	announce: IAnnounce;
	pageType: string;
}

export const AdvertiseCard = ({ announce, pageType }: AdvertiseCardProps) => {
	const {setModalType} = useContext(ModalContext)

	const handlerEditModal = () => {
		setModalType("editeAnnounce")
		localStorage.setItem('@CURRENTITEM', announce.id)
	}
	
	return (
		<AnnounceCardContainer key={announce.id}>
			<AnnounceImageContainer>
				<img
					src={
						announce.images[0].url
					}
					alt={
						announce.images[0].name
					}
				/>
				{pageType === "private" && (
					<AnnounceStatus className={announce.published ? "ativo" : "inativo"}>
						{announce.published ? "Ativo" : "Inativo"}
					</AnnounceStatus>
				)}
			</AnnounceImageContainer>
			<AnnounceTitle>{announce.model}</AnnounceTitle>
			<AnnouceDescription>
				{announce.description || "Descrição não disponível..."}
			</AnnouceDescription>
			<PriceContainer>
				<div>
					<span>{announce.mileage + " KM"}</span>
					<span>{announce.year}</span>
				</div>
				<p>R${` ${announce.price}`}</p>
			</PriceContainer>
			{pageType === "private" && (
				<AnnounceBtnContainer>
					<button onClick={handlerEditModal }>Editar</button>
					<button>Ver detalhes</button>
				</AnnounceBtnContainer>
			)}
		</AnnounceCardContainer>
	);
};
