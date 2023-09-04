import { styled } from "styled-components";

export const AnnounceCardContainer = styled.li`
    width: 95%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 900px) {
        width: 30%;
    }
`;

export const AnnounceImageContainer = styled.div`
    width: 100%;
    min-height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.grey7};
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.whiteFixed};

    img {
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        max-height: 100%;
        min-height: 100%;
    }

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.brand1};
    }
`;

export const AnnounceStatus = styled.span`
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
    top: 0.5rem;
    left: 0.5rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0 0.5rem;

    &.ativo {
        background-color: ${({ theme }) => theme.colors.brand1};
        color: ${({ theme }) => theme.colors.whiteFixed};
    }

    &.inativo {
        background-color: ${({ theme }) => theme.colors.grey4};
        color: ${({ theme }) => theme.colors.whiteFixed};
    }
`;

export const AnnounceTitle = styled.h4`
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 600;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.grey1};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const AnnouceDescription = styled.p`
    width: 100%;
    height: 48px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grey2};
    overflow-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const PriceContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        justify-content: center;
        gap: 12px;

        span {
            padding: 0.25rem 0.5rem;
            background-color: ${({ theme }) => theme.colors.brand4};
            color: ${({ theme }) => theme.colors.brand1};
            font-size: 0.875rem;
            font-weight: 500;
            font-family: ${({ theme }) => theme.fonts.secondary};
        }
    }

    p {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 1rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.grey1};
    }
`;

export const AnnounceBtnContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    button {
        padding: 12px 20px;
        border: 2px solid ${({ theme }) => theme.colors.grey1};
        border-radius: 0.25rem;
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-weight: 600;
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.grey1};
        transition: 0.3s ease-in-out;

        &:hover {
            background-color: ${({ theme }) => theme.colors.grey1};
            color: ${({ theme }) => theme.colors.whiteFixed};
        }
    }
`;
