import styled from "styled-components";

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 35px;

    @media(max-width:450px) {
   display:none; 
}

    button {
        width: 279px;
        height: 48px;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.whiteFixed};
        background-color: ${({ theme }) => theme.colors.brand2};
        border-radius: 4px;
    }
`;

export const UlContainer = styled.ul`
    display: flex;
    flex-direction: column;

    li {
        padding-left: 10px;
    }

`;

export const InputContainer = styled.div`
    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
        width: 100%;
    }
`;

export const AsideDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;
