import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const UserInfosContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Useravatar = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.brand1};
  color: ${({ theme }) => theme.colors.whiteFixed};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: .8rem;
  font-weight: 700;
`;

export const UserName = styled(Link)`
  color: ${({ theme }) => theme.colors.grey2};
`;
