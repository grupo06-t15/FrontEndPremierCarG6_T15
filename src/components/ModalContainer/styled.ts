import { styled } from 'styled-components';

export const GeneralModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  padding-top: 5rem;

  @media screen and (min-width: 900px) {
    padding-top: 2rem;
  }
`;
