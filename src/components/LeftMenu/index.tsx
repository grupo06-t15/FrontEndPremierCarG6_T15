import { useContext } from "react";
import { StyledText } from "../../styles/typography";
import {
	Aside,
	AsideDiv,
	FilterButton,
	InputContainer,
	ModelButton,
	UlContainer,
} from "./styles";
import { FilterContext } from "../../providers/FilterProvider";
import { v4 as uuidv4 } from "uuid";

export const LeftMenu = () => {
	const {
		carsAPI,
		showCarsAPI,
		brandsAPI,
		modelsAPI,
		yearsAPI,
		colorsAPI,
		fuelsAPI,
		filteredModelsCarsAPI,
		filteredBrandsCarsAPI,
		filteredModelCarsAPI,
	} = useContext(FilterContext);

	const valor = Array.from(new Set(carsAPI.map((car) => car.price)));

	const menorValor = Math.min(...valor);
	const maiorValor = Math.max(...valor);

	return (
		<Aside>
			<StyledText tag="h1" type="Heading-4-600" color="grey0">
				Marca
			</StyledText>

			<UlContainer>
				{brandsAPI.map((brand) => (
					<ModelButton
						onClick={() => [
							filteredBrandsCarsAPI(brand),
							filteredModelsCarsAPI(brand),
						]}
						key={uuidv4()}
					>
						{brand.charAt(0).toUpperCase() + brand.substr(1)}
					</ModelButton>
				))}
			</UlContainer>

			<StyledText tag="h1" type="Heading-4-600" color="grey0">
				Modelo
			</StyledText>

			<UlContainer>
				{modelsAPI.map((model) => (
					<ModelButton
						key={uuidv4()}
						onClick={() => [
							filteredModelsCarsAPI(model),
							filteredModelCarsAPI(model),
						]}
					>
						{model.charAt(0).toUpperCase() + model.substr(1).split(" ")[0]}
					</ModelButton>
				))}
			</UlContainer>

			<StyledText tag="h1" type="Heading-4-600" color="grey0">
				Cor
			</StyledText>

			<UlContainer>
				{colorsAPI.map((color) => (
					<ModelButton key={uuidv4()}>
						{color.charAt(0).toUpperCase() + color.substr(1)}
					</ModelButton>
				))}
			</UlContainer>

			<StyledText tag="h1" type="Heading-4-600" color="grey0">
				Ano
			</StyledText>

			<UlContainer>
				{yearsAPI.map((year) => (
					<ModelButton key={uuidv4()}>{year}</ModelButton>
				))}
			</UlContainer>

			<StyledText tag="h1" type="Heading-4-600" color="grey0">
				Combustível
			</StyledText>

			<UlContainer>
				{fuelsAPI.map((fuel) => (
					<StyledText
						tag="li"
						type="Heading-6-500"
						color="grey3"
						key={uuidv4()}
					>
						{fuel}
					</StyledText>
				))}
			</UlContainer>

			<div>
				<StyledText tag="h1" type="Heading-4-600" color="grey0">
					Km
				</StyledText>
				<InputContainer>
					<AsideDiv>
						<StyledText tag="p" type="Heading-7-600" color="grey3">
							0 km
						</StyledText>
						<StyledText tag="p" type="Heading-7-600" color="grey3">
							650.000 km
						</StyledText>
					</AsideDiv>
					<input
						id="input__range"
						type="range"
						min="0km"
						max="650.000km"
						step="1"
						defaultValue="90"
					></input>
				</InputContainer>
			</div>
			<div>
				<StyledText tag="h1" type="Heading-4-600" color="grey0">
					Preço
				</StyledText>
				<InputContainer>
					<AsideDiv>
						<StyledText tag="p" type="Heading-7-600" color="grey3">
							{menorValor.toLocaleString("pt-Br", {
								style: "currency",
								currency: "BRL",
							})}
						</StyledText>
						<StyledText tag="p" type="Heading-7-600" color="grey3">
							{maiorValor.toLocaleString("pt-Br", {
								style: "currency",
								currency: "BRL",
							})}
						</StyledText>
					</AsideDiv>
					<input
						id="input__range"
						type="range"
						min={menorValor}
						max={maiorValor}
						step="1"
						defaultValue="90"
					></input>
				</InputContainer>
			</div>
			<FilterButton onClick={() => showCarsAPI()}>Limpar filtros</FilterButton>
		</Aside>
	);
};
