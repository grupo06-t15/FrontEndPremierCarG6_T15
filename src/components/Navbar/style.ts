import { styled } from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.grey10};

  border: solid 1px ${({ theme }) => theme.colors.grey6};

  height: 80px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 60px;

  height: 100%;

  img {
    width: 240px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 44px;
    padding-left: 44px;

    border-left: solid 1px ${({ theme }) => theme.colors.grey6};

    height: 100%;

    button {
      color: ${({ theme }) => theme.colors.grey0};
      background-color: ${({ theme }) => theme.colors.grey10};
      border: solid 2px ${({ theme }) => theme.colors.grey4};

      padding: 12px 28px;

      border-radius: 4px;

      font-family: Inter;
      font-weight: 600;
      size: 16px;

      color: ${({ theme }) => theme.colors.grey2};
    }
  }
`;
