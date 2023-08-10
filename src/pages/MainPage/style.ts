import styled from "styled-components";
import FrontAdsImage from "../../assets/FrontAds.png";
import addsMobile from "../../assets/addsMobile.png"


export const Main = styled.main`
    display: flex;
    flex-direction: column;

    button{
        width: 279px;
        height: 48px;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.whiteFixed};
        background-color: ${({ theme }) => theme.colors.brand2};
        border-radius: 4px;
    }

    .buttonMobile{
        display:flex;
        display: none;
        align-items: center;
        height: 379px;
        justify-content: center;
        justify-content: space-evenly;
        flex-direction: column;
        

        @media(max-width:450px) {
            display:flex;
            
        }
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

    @media(max-width:450px) {
    background-image: url(${addsMobile});
    height: 625px;
     
}
`;

export const Container = styled.div`
    display: flex;

    gap: 32px;

    margin: 20px;
  
`;





