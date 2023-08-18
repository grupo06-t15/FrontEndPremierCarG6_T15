import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 140px;

  position: absolute;
  bottom: 0px;

  background-color: ${({ theme }) => theme.colors.grey0};

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    height: 310px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 60px;

  height: 100%;

  .FooterLogo {
    width: 156px;
  }

  .FooterButton {
    height: 50px;
    width: 53px;
    cursor: pointer;
  }

  @media (max-width: 769px) {
    padding: 42px 0px;
    flex-direction: column;
  }
`;
