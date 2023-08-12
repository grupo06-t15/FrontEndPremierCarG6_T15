import { css, styled } from "styled-components";
import BaseText from "./components/BaseText";

interface IStyledTitleProps {
  type:
    | "Heading-1-700"
    | "Heading-2-600"
    | "Heading-3-600"
    | "Heading-3-500"
    | "Heading-4-600"
    | "Heading-4-500"
    | "Heading-5-600"
    | "Heading-5-500"
    | "Heading-6-600"
    | "Heading-6-500"
    | "Heading-7-600"
    | "Heading-7-500"
    | "Body-1-400"
    | "Body-1-600"
    | "Body-2-400"
    | "Body-2-500";
  color:
    | "grey0"
    | "grey1"
    | "grey2"
    | "grey3"
    | "whiteFixed"
    | "brand1"
    | "brand2"
    | "brand3"
    | "brand4";
}

export const StyledText = styled(BaseText)<IStyledTitleProps>`
  ${({ color, theme }) => {
    switch (color) {
      case "grey0":
        return css`
          color: ${theme.colors.gray0};
        `;
      case "grey1":
        return css`
          color: ${theme.colors.gray1};
        `;
      case "grey2":
        return css`
          color: ${theme.colors.grey2};
        `;
      case "grey3":
        return css`
          color: ${theme.colors.grey3};
        `;
      case "whiteFixed":
        return css`
          color: ${theme.colors.whiteFixed};
        `;
      case "brand1":
        return css`
          color: ${theme.colors.brand1};
        `;
      case "brand2":
        return css`
          color: ${theme.colors.brand2};
        `;
      case "brand3":
        return css`
          color: ${theme.colors.brand3};
        `;
      case "brand4":
        return css`
          color: ${theme.colors.brand4};
        `;
    }
  }};

  ${({ type }) => {
    switch (type) {
      case "Heading-1-700":
        return css`
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 700px;
          font-size: 44px;
          line-height: 56px;
        `;
    }
    switch (type) {
      case "Heading-2-600":
        return css`
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 600px;
          font-size: 36px;
          line-height: 45px;
        `;
    }
    switch (type) {
      case "Heading-3-600":
        return css`
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 600px;
          font-size: 32px;
          line-height: 40px;
        `;
    }
    switch (type) {
      case "Heading-3-500":
        return css`
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 500px;
          font-size: 32px;
          line-height: 40px;
        `;
    }
    switch (type) {
      case "Heading-4-600":
        return css`
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 600px;
          font-size: 28px;
          line-height: 35px;
        `;
    }
    switch (type) {
      case "Heading-4-500":
        return css`
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 500px;
          font-size: 28px;
          line-height: 35px;
        `;
    }
    switch (type) {
      case "Heading-5-600":
        return css`
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 600px;
          font-size: 24px;
          line-height: 30px;
        `;
    }
    switch (type) {
      case "Heading-5-500":
        return css`
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 500px;
          font-size: 24px;
          line-height: 30px;
        `;
    }
    switch (type) {
      case "Heading-6-600":
        return css`
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 600px;
          font-size: 20px;
          line-height: 25px;
        `;
    }
    switch (type) {
      case "Heading-6-500":
        return css`
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 500px;
          font-size: 20px;
          line-height: 25px;
        `;
    }
    switch (type) {
      case "Heading-7-600":
        return css`
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 600px;
          font-size: 16px;
          line-height: 20px;
        `;
    }
    switch (type) {
      case "Heading-7-500":
        return css`
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 500px;
          font-size: 16px;
          line-height: 20px;
        `;
    }
    switch (type) {
      case "Body-1-600":
        return css`
          font-family: ${({ theme }) => theme.fonts.secondary};
          font-size: 600px;
          font-size: 16px;
          line-height: 28px;
        `;
    }
    switch (type) {
      case "Body-1-400":
        return css`
          font-family: ${({ theme }) => theme.fonts.secondary};
          font-weight: 400px;
          font-size: 16px;
          line-height: 28px;
        `;
    }
    switch (type) {
      case "Body-2-500":
        return css`
          font-family: ${({ theme }) => theme.fonts.secondary};
          font-size: 500px;
          font-size: 14px;
          line-height: 24px;
        `;
    }
    switch (type) {
      case "Body-2-400":
        return css`
          font-family: ${({ theme }) => theme.fonts.secondary};
          font-size: 400px;
          font-size: 14px;
          line-height: 24px;
        `;
    }
  }}
`;
