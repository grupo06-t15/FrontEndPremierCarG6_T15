import { styled } from "styled-components";

export const StyledNavbar = styled.nav`
  height: 80px;
  width: 100%;

  position: absolute;
  top: 0px;

  background-color: ${({ theme }) => theme.colors.grey10};

  border: solid 1px ${({ theme }) => theme.colors.grey6};

  z-index: 1;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;

  height: 100%;

  img {
    width: 240px;
  }

  button {
    position: relative;
    display: block;
    line-height: 30px;
    width: 30px;
    padding: 6px;
    border-radius: 6px;
    font-size: 22px;
    background-color: ${({ theme }) => theme.colors.whiteFixed};
  }

  @media (min-width: 769px) {
    padding: 0 60px;

    button {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;

  align-items: center;
  gap: 44px;
  padding-left: 44px;

  border-left: solid 1px ${({ theme }) => theme.colors.grey6};

  height: 100%;

  span {
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

  @media (max-width: 769px) {
    display: none;
  }
`;

export const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  height: 100px;
  width: 130px;
  padding: 1rem;
  gap: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteFixed};
  border-radius: 6px;

  span {
    color: ${({ theme }) => theme.colors.grey0};
    background-color: ${({ theme }) => theme.colors.grey10};
    border: solid 2px ${({ theme }) => theme.colors.grey4};

    padding: 4px 8px;

    border-radius: 4px;

    font-weight: 600;
    size: 12px;

    color: ${({ theme }) => theme.colors.grey2};
  }

  @media (max-width: 769px) {
    position: absolute;
    margin-top: 3rem;
    margin-left: 66%;
  }
`;
