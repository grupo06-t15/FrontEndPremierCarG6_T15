//import { mainTheme } from "./../../styles/theme";
import { styled } from "styled-components";

export const Announcement = styled.li`
  display: flex;
  flex-direction: column;
  height: 380px;
  width: 320px;
  gap: 1rem;
  justify-content: space-between;

  h3 {
    font-size: var(Heading-1-700);
    color: var(grey1);
  }

  p {
    font-size: var(Body-2-400);
  }
`;

export const CarImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
  width: 100%;
  height: 130px;
  border: 1px solid #ffffff;
  position: relative;

  img {
    height: 110px;
  }

  &:hover {
    border: 1px solid blue;
  }
`;

export const Active = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  line-height: 20px;
  width: 40px;
  vertical-align: middle;
  text-align: center;
  background-color: blue;
  color: #ffffff;
`;

export const Inactive = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  line-height: 20px;
  width: 40px;
  vertical-align: middle;
  text-align: center;
  background-color: grey;
  color: #ffffff;
`;

export const Sale = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  line-height: 32px;
  width: 22px;
  vertical-align: middle;
  text-align: center;
  border-radius: 6px;
  background-color: green;
  color: #ffffff;
`;

export const UserData = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: center;
  gap: 0.6rem;

  span {
    width: 34px;
    line-height: 34px;
    vertical-align: middle;
    text-align: center;
    border-radius: 50px;
    background-color: blue;
    color: #ffffff;
    font-size: 14px;
  }
`;

export const CarData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.4rem;

    span {
      line-height: 30px;
      vertical-align: middle;
      text-align: center;
      padding: 0.2rem 0.6rem;
      background-color: lightblue;
      color: blue;
      border-radius: 6px;
    }
  }
`;
