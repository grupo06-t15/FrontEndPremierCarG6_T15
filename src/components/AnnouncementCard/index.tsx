import { useContext, useState } from "react";
import {
	Announcement,
	CarData,
	CarImage,
	Sale,
	StyledDetail,
	StyledLink,
	UserData,
} from "./style";
import { StyledText } from "../../styles/typography";
import { FilterContext } from "../../providers/FilterProvider";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "../../providers/UserProvider";

export const AnnouncementCard = () => {
	const [isActive, setIsActive] = useState(true);
	const [isForSale, setIsForSale] = useState(false);

	const { carsAPI } = useContext(FilterContext);
	const { retrieveUser } = useContext(UserContext);

	return (
		<>
			{carsAPI.map((car) => (
				<Announcement key={uuidv4()}>
					<CarImage>
						{isActive ? (
							<StyledText tag="span" type="Body-2-500" color="whiteFixed">
								Ativo
							</StyledText>
						) : (
							<StyledText tag="span" type="Body-2-500" color="whiteFixed">
								Inativo
							</StyledText>
						)}
						{isForSale && <Sale>$</Sale>}
						<img alt="Foto do carro" src={car.images[0].url}></img>
					</CarImage>
					<StyledText tag="h1" type="Heading-7-600" color="grey1">
						{car.brand.charAt(0).toUpperCase() +
							car.brand.substr(1) +
							" - " +
							car.model.split(" ")[0].charAt(0).toUpperCase() +
							car.model.split(" ")[0].substr(1)}
					</StyledText>
					<StyledText tag="p" type="Body-2-400" color="grey2">
						{car.model.charAt(0).toUpperCase() + car.model.substr(1)}
					</StyledText>
					<UserData>
						<StyledLink
							to={`/advertiser/${car.user.name.replace(" ", "-")}}`}
							onClick={() => retrieveUser(car.user.id)}
						>
							<StyledText tag="span" type="Body-2-500" color="brand1">
								{((fullname) =>
									fullname
										.map((n, i) => (i == 0 || i == fullname.length - 1) && n[0])
										.filter((n) => n)
										.join(""))(car.user.name.split(" "))}
							</StyledText>
							<StyledText tag="p" type="Body-2-500" color="grey2">
								{car.user.name}
							</StyledText>
						</StyledLink>
					</UserData>
					<CarData>
						<div>
							<StyledText tag="span" type="Body-2-500" color="brand1">
								{car.mileage} KM
							</StyledText>
							<StyledText tag="span" type="Body-2-500" color="brand1">
								{car.year}
							</StyledText>
						</div>
						<StyledText tag="span" type="Heading-7-500" color="grey1">
							{" "}
							{car.price.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</StyledText>
					</CarData>
					<StyledDetail to="/announcement" state={{ from: car }}>
						<StyledText tag="p" type="Body-2-500" color="brand1">
							Ver detalhes
						</StyledText>
					</StyledDetail>
				</Announcement>
			))}
		</>
	);
};
