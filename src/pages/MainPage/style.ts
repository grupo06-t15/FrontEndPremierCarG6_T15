import styled from "styled-components";
import FrontAdsImage from "../../assets/FrontAds.png";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
`;

export const Menu = styled.nav`
    display: flex;
    justify-content: space-around;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.whiteFixed};
`;

export const FrontAds = styled.div`
    width: 100%;
    min-height: 544px;

    background-image: url(${FrontAdsImage});

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const Container = styled.div`
    display: flex;

    gap: 32px;

    margin: 20px;
`;
