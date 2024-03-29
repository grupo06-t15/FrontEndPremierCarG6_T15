import styled from "styled-components";
import FrontAdsImage from "../../assets/FrontAds.png";
import addsMobile from "../../assets/addsMobile.png";

export const MainPageContainer = styled.div`
    position: relative;

    height: 100%;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;

    padding-bottom: 140px;

    .divButtonMobile {
        display: none;
        height: 379px;
        width: 100%;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;

        @media (max-width: 769px) {
            display: flex;
        }
    }
    .next {
        color: ${({ theme }) => theme.colors.brand2};
        background-color: transparent;
        font-size: 2rem;
        justify-content: center;
        font-weight: 700;
    }

    span {
        color: ${({ theme }) => theme.colors.grey4};
    }
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

    .addsDiv {
        display: none;
        width: 100%;
        flex-direction: column;
        align-items: center;

        gap: 16px;

        position: absolute;
        top: 123px;

        h3,
        p {
            text-align: center;
            width: 100%;
            color: ${({ theme }) => theme.colors.grey10};
        }
        p {
            font-size: 1.3rem;
            line-height: 25px;
        }
        h3 {
            font-size: 1.87rem;
        }
    }

    @media (max-width: 769px) {
        background-image: url(${addsMobile});

        .addsDiv {
            display: flex;
        }
    }
`;

export const Container = styled.div`
    display: flex;

    gap: 32px;

    margin: 20px;
`;

export const AnnouncementList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 42px;

    @media (max-width: 769px) {
        overflow: auto;
        flex-wrap: nowrap;
        align-items: center;
        gap: 23px;
    }
`;
