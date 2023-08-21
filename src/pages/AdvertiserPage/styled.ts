import { styled } from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey8};
`;

export const PurpleBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.brand1};
`;

export const AnnounceList = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20rem;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between
  }
`;