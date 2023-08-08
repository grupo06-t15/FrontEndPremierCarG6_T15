import { styled } from "styled-components";

export const StyledFooter = styled.footer`
    width: 100vw;
    height: 140px;

    background-color: #0b0d0d;
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 60px;

    height: 100%;

    .FooterLogo {
        height: 26.34px;
        width: 153.02px;
    }

    .FooterButton {
        height: 50px;
        width: 53px;
    }
`;
