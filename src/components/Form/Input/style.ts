import styled from "styled-components";
import { TextField } from "@mui/material";

export const StyledFieldset = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
export const StyledLabel = styled.label`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 500;
    font-size: 14px;
    line-height: 16.94px;
    color: ${({ theme }) => theme.colors.grey2};
`;

export const StyledTextField = styled(TextField)`
    width: 100%;
`;

