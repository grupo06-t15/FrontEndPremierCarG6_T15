import { styled } from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey8};

  footer {
    position: relative;
  }
`;

export const PurpleBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.brand1};
`;

export const AnnounceList = styled.ul`
  width: 90%;
  max-height: 23.75rem;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 6rem;
  gap: 1.5rem;

  @media (min-width: 900px) {
    min-height: 30rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
