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
    cars,
    models,
    names,
    years,
    fuels,
    showCars,
    filterModels,
    filteredBrandCars,
    filteredModelCars,
  } = useContext(FilterContext);

  const valor = Array.from(new Set(models.map((model) => model.value)));
  const menorValor = Math.min(...valor);
  const maiorValor = Math.max(...valor);

  return (
    <Aside>
      <StyledText tag="h1" type="Heading-4-600" color="grey0">
        Marca
      </StyledText>
      <UlContainer>
        {cars.map((car) => (
          <ModelButton
            onClick={() => [filterModels(car), filteredBrandCars(car)]}
            key={uuidv4()}
          >
            {car.charAt(0).toUpperCase() + car.substr(1)}
          </ModelButton>
        ))}
      </UlContainer>

      <StyledText tag="h1" type="Heading-4-600" color="grey0">
        Modelo
      </StyledText>
      <UlContainer>
        {names.map((name) => (
          <ModelButton
            // tag="li"
            // type="Heading-6-500"
            // color="grey3"
            key={uuidv4()}
            onClick={() => filteredModelCars(name)}
          >
            {name.charAt(0).toUpperCase() + name.substr(1)}
          </ModelButton>
        ))}
      </UlContainer>

      <StyledText tag="h1" type="Heading-4-600" color="grey0">
        Cor
      </StyledText>

      <UlContainer>
        <StyledText tag="li" type="Heading-6-500" color="grey3">
          Azul
        </StyledText>
      </UlContainer>

      <StyledText tag="h1" type="Heading-4-600" color="grey0">
        Ano
      </StyledText>
      <UlContainer>
        {years.map((year) => (
          <StyledText
            tag="li"
            type="Heading-6-500"
            color="grey3"
            key={uuidv4()}
          >
            {year}
          </StyledText>
        ))}
      </UlContainer>

      <StyledText tag="h1" type="Heading-4-600" color="grey0">
        Combustível
      </StyledText>

      <UlContainer>
        {fuels.map((fuel) => (
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
      <FilterButton onClick={() => showCars()}>Limpar filtros</FilterButton>
    </Aside>
  );
};
