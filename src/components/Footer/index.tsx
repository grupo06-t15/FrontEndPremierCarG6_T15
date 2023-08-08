import FooterLogo from "../../assets/FooterLogo.png";
import FooterButton from "../../assets/FooterButton.png";
import { FooterContainer, StyledFooter } from "./style";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterContainer>
                <img className="FooterLogo" src={FooterLogo} alt="Logo" />
                <p>@ 2022 - Todos os direitos reservados.</p>
                <img className="FooterButton" src={FooterButton} alt="Footer Button" />
            </FooterContainer>
        </StyledFooter>
    );
};
