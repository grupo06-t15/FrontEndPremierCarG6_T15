import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 44px 48px;

    display: flex;
    flex-direction: column;
    gap: 32px;

    width: -webkit-fill-available;
    max-width: 412px;

    margin: 52px 16px;

    background-color: ${({ theme }) => theme.colors.grey10};

    .registerButton {
        color: ${({ theme }) => theme.colors.grey0};
        background-color: ${({ theme }) => theme.colors.grey10};
        border: solid 2px ${({ theme }) => theme.colors.grey4};

        padding: 12px 28px;

        border-radius: 4px;

        font-family: Inter;
        font-weight: 600;
        size: 16px;

        display: flex;
        justify-content: center;
    }
`;

export const FieldsetContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .forgotPassword {
        align-self: flex-end;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    .registerAcc {
        align-self: center;
    }
`;

export const StyledTextField = styled(TextField)`
    width: 100%;
`;

export const EnterButton = styled.button`
    min-height: 48px;
    width: 100%;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.whiteFixed};
    background-color: ${({ theme }) => theme.colors.brand2};
    border-radius: 4px;
`;
