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

    .divButtonMobile{
        display: none;
        height: 379px;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        

        @media(max-width:450px) {
            display:flex;
            
        }
    }
    .next{
        color:${({ theme }) => theme.colors.brand2};
        background-color:transparent;
        font-size:2rem;
        justify-content: center;
        font-weight: 700;
    }
  
    span{
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
    max-width: 253px;
   
    position: absolute;
   top: 151px;
    left: 86px;

h3, p {
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteFixed};
  }
  p{
    font-size: 1rem;
    line-height: 25px;
  }
}   
    

    @media(max-width:450px) {
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

export const AnnouncementList=styled.ul`
display: flex;
flex-wrap: wrap;
gap: 42px;

@media (max-width:450px){
overflow: auto;
flex-wrap: nowrap;
align-items: center;
gap: 23px;
}

  
`;
