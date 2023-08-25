import { styled } from "styled-components";

export const InfoContainer = styled.div`
    width: 90%;
    max-height: 26.875rem;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.whiteFixed};
    transform: translateY(-10rem);
    border-radius: 4px;
    padding: 2rem 1.5rem;
`;

export const AvatarContainer = styled.div`
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.brand1};
    border-radius: 50%;
    margin-bottom: 1.5rem;

    p {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-weight: 500;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.whiteFixed};
    }
`;

export const NameContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.25rem;

    h4 {
        font-size: 1.25rem;
        font-weight: 600;
        font-family: ${({ theme }) => theme.fonts.primary};
        color: ${({ theme }) => theme.colors.grey1};
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors.brand4};
        color: ${({ theme }) => theme.colors.brand1};
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 0.875rem;
        font-weight: 500;
    }
`;

export const Description = styled.p`
    width: 100%;
    height: 8.75rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1rem;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 1rem;
`;

export const CreateAnnounceBtn = styled.button`
    width: 10rem;
    padding: 12px 28px;
    border: 1.5px solid ${({ theme }) => theme.colors.brand1};
    border-radius: 4px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 600;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.brand1};
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.brand4};
    }
`;
