import { styled } from "styled-components";

export const Announcement = styled.li`
    display: flex;
    flex-direction: column;
    height: 380px;
    min-width: 320px;
    gap: 1rem;
    justify-content: space-between;
    cursor: pointer;
`;

export const CarImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.grey7};
    width: 100%;
    height: 130px;
    border: 1px solid ${({ theme }) => theme.colors.whiteFixed};
    position: relative;

    img {
        height: 110px;
    }

    span {
        position: absolute;
        top: 10px;
        left: 10px;
        line-height: 20px;
        padding: 0 0.4rem;
        vertical-align: middle;
        text-align: center;
        background-color: ${({ theme }) => theme.colors.brand1};
        color: ${({ theme }) => theme.colors.whiteFixed};
    }

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.brand1};
    }
`;

export const Active = styled.span`
    position: absolute;
    top: 10px;
    left: 10px;
    line-height: 20px;
    padding: 0 0.4rem;
    vertical-align: middle;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.brand1};
    color: ${({ theme }) => theme.colors.whiteFixed};
`;

export const Inactive = styled.span`
    position: absolute;
    top: 10px;
    left: 10px;
    line-height: 20px;
    padding: 0 0.4rem;
    vertical-align: middle;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.grey4};
    color: ${({ theme }) => theme.colors.whiteFixed};
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
    background-color: ${({ theme }) => theme.colors.random7};
    color: ${({ theme }) => theme.colors.whiteFixed};
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
        background-color: ${({ theme }) => theme.colors.brand1};
        color: ${({ theme }) => theme.colors.whiteFixed};
        font-size: 14px;
    }
`;

export const CarData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        padding: 0.2rem 0.6rem;
        border-radius: 6px;
        gap: 0.4rem;

        span {
            line-height: 30px;
            vertical-align: middle;
            text-align: center;
            padding: 0.2rem 0.6rem;
            background-color: ${({ theme }) => theme.colors.brand4};
            color: ${({ theme }) => theme.colors.brand1};
            border-radius: 6px;
        }
    }
`;
