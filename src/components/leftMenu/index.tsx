import { StyledText } from "../../styles/typography";
import { Aside, AsideDiv, InputContainer, UlContainer } from "./styles";

export const LeftMenu = () => {
    return (
        <Aside>
            <StyledText tag="h1" type="Heading-4-600" color="grey0">
                Marca
            </StyledText>

            <UlContainer>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    Fiat
                </StyledText>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    Fiat
                </StyledText>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    Fiat
                </StyledText>
            </UlContainer>

            <StyledText tag="h1" type="Heading-4-600" color="grey0">
                Modelo
            </StyledText>

            <UlContainer>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    Civic
                </StyledText>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    Civic
                </StyledText>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    Civic
                </StyledText>
            </UlContainer>

            <StyledText tag="h1" type="Heading-4-600" color="grey0">
                Cor
            </StyledText>

            <UlContainer>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    Azul
                </StyledText>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    Azul
                </StyledText>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    Azul
                </StyledText>
            </UlContainer>

            <StyledText tag="h1" type="Heading-4-600" color="grey0">
                Ano
            </StyledText>

            <UlContainer>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    2022
                </StyledText>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    2022
                </StyledText>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    2022
                </StyledText>
            </UlContainer>

            <StyledText tag="h1" type="Heading-4-600" color="grey0">
                Combustível
            </StyledText>

            <UlContainer>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    Elétrico
                </StyledText>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    Elétrico
                </StyledText>
                <StyledText tag="li" type="Heading-6-500" color="grey3">
                    Elétrico
                </StyledText>
            </UlContainer>

            <div>
                <InputContainer>
                    <StyledText tag="h1" type="Heading-4-600" color="grey0">
                        Km
                    </StyledText>
                    <AsideDiv>
                        <StyledText tag="p" type="Heading-7-600" color="grey3">
                            0 km
                        </StyledText>
                        <StyledText tag="p" type="Heading-7-600" color="grey3">
                            650.000 km
                        </StyledText>
                    </AsideDiv>
                    <input id="input__range" type="range" min="0km" max="650.000km" step="1" value="90"></input>
                </InputContainer>
            </div>
            <div>
                <InputContainer>
                    <StyledText tag="h1" type="Heading-4-600" color="grey0">
                        Preço
                    </StyledText>
                    <AsideDiv>
                        <StyledText tag="p" type="Heading-7-600" color="grey3">
                            R$ 10 mil
                        </StyledText>
                        <StyledText tag="p" type="Heading-7-600" color="grey3">
                            R$ 550 mil
                        </StyledText>
                    </AsideDiv>
                    <input id="input__range" type="range" min="R$ 10 mil" max="R$ 550 mil" step="1" value="90"></input>
                </InputContainer>
            </div>
            <button>Limpar filtros</button>
        </Aside>
    );
};
