import FooterLogo from "../../assets/premiercarfooter.png";
import FooterButton from "../../assets/FooterButton.png";
import { FooterContainer, StyledFooter } from "./style";
import { StyledText } from "../../styles/typography";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledFooter>
      <FooterContainer>
        <img className="FooterLogo" src={FooterLogo} alt="Logo" />
        <StyledText tag="p" type="Body-2-400" color="whiteFixed">
          @ 2022 - Todos os direitos reservados.
        </StyledText>
        <img
          className="FooterButton"
          src={FooterButton}
          alt="Footer Button"
          onClick={() => scrollToTop()}
        />
      </FooterContainer>
    </StyledFooter>
  );
};
