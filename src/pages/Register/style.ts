import styled from "styled-components";

export const RegisterPageContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
`;

export const StyledTypeButtonsAccount = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    .radio-label {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: background-color 0.3s, color 0.3s;
        cursor: pointer;
        width: 100%;
    }

    .radio-label input[type="radio"] {
        appearance: none;
    }

    .radio-label.selected {
        background-color: ${({ theme }) => theme.colors.brand2};
        color: ${({ theme }) => theme.colors.whiteFixed};
        border-radius: 4px;
        font-size: 1rem;
    }
`;

export const StyledRegisterPage = styled.main`
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
