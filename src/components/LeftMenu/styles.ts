import styled from "styled-components";

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 35px;

    @media (max-width: 769px) {
        display: none;
    }
`;

export const UlContainer = styled.ul`
    display: flex;
    flex-direction: column;

    li,
    button {
        padding-left: 10px;
        cursor: pointer;
    }
`;

export const InputContainer = styled.div`
    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
        width: 100%;
        cursor: pointer;
    }
`;

export const AsideDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FilterButton = styled.button`
    width: 279px;
    height: 48px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.whiteFixed};
    background-color: ${({ theme }) => theme.colors.brand2};
    border-radius: 4px;
`;

export const ModelButton = styled.button`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.grey3};
    background-color: ${({ theme }) => theme.colors.whiteFixed};
    align-self: baseline;
`;
