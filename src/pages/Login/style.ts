import styled from "styled-components";

export const LoginPageContainer = styled.div`
    height: 100vh;
`;

export const StyledLoginPage = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;

    padding-bottom: 140px;
    padding-top: 80px;

    background-color: ${({ theme }) => theme.colors.grey6};

    @media (max-width: 769px) {
        padding-bottom: 310px;

        @media (max-height: 970px) {
            padding-bottom: 0px;
        }
    }

    @media (max-height: 800px) {
        padding-bottom: 0px;
    }
`;
