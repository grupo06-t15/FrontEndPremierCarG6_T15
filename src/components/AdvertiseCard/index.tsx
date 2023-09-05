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

interface AdvertiseCardProps {
	announce: IAnnounce;
	pageType: string;
}

export const AdvertiseCard = ({ announce, pageType }: AdvertiseCardProps) => {
	return (
		<AnnounceCardContainer key={announce.id}>
			<AnnounceImageContainer>
				<img
					src={
						announce.images.find(
							(image) => image.name.charAt(image.name.length - 1) === "1"
						)?.url
					}
					alt={
						announce.images.find(
							(image) => image.name.charAt(image.name.length - 1) === "1"
						)?.name
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
					<button>Editar</button>
					<button>Ver detalhes</button>
				</AnnounceBtnContainer>
			)}
		</AnnounceCardContainer>
	);
};
