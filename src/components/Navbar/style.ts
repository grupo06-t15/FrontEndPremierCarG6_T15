import { styled } from "styled-components";

export const StyledNavbar = styled.nav`
    width: 100vw;

    background-color: #fdfdfd;

    border: solid 1px #dee2e6;

    height: 80px;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 60px;

    height: 100%;

    img {
        height: 26.34px;
        width: 153.02px;
    }

    div {
        display: flex;
        align-items: center;
        gap: 44px;
        padding-left: 44px;

        border-left: solid 1px #dee2e6;

        height: 100%;

        button {
            color: #0b0d0d;
            background-color: #fdfdfd;
            border: solid 2px #adb5bd;

            padding: 12px 28px;

            border-radius: 4px;

            font-family: Inter;
            font-weight: 600;
            size: 16px;

            color: #495057;
        }
    }
`;
