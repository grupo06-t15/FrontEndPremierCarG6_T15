import { styled } from 'styled-components';

export const ModalContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  border-radius: 0.5rem;
  gap: 2rem;
  padding: 1rem;

  @media screen and (min-width: 900px) {
    width: 32%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: 1rem;
  font-style: normal;
`;

export const CloseModalBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.grey4};
`;

export const ModalForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  overflow-y: auto;
`;

export const ModalFormTitle = styled.label`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
`;

export const ModalFormImputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &.sublcass {
    flex-direction: row;
  }
`;

export const ModalFormInputTitle = styled.label`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.875rem;
`;

export const ModalFormSelect = styled.select`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  border: 2px solid ${({ theme }) => theme.colors.grey7};
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.grey3};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.brand1};
  }
`;

export const ModalFormSubclass = styled.div`
  width: 48.5%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ModalFormSubclassTitle = styled.label`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.875rem;
`;

export const ModalFormSubclassInput = styled.input`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  border: 2px solid ${({ theme }) => theme.colors.grey7};
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.grey3};
  font-size: 1rem;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.brand1};
  }
`;

export const ModalDescriptionInput = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  border: 2px solid ${({ theme }) => theme.colors.grey7};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.grey3};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.secondary};

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.brand1};
  }
`;

export const AddImageBtn = styled.button`
  width: 100%;
  height: 3rem;
  min-height: 3rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.brand4};
  font-weight: 600;
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.brand1};
`;

export const DeleteAnnounceBtn = styled.button`
  width: 48%;
  height: 3rem;
  border-radius: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 600;
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.grey5};
  color: ${({ theme }) => theme.colors.grey0};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey6};
    color: ${({ theme }) => theme.colors.grey2};
    cursor: not-allowed;
  }
`;

export const SaveAnnounceBtn = styled.button`
  width: 48%;
  height: 3rem;
  border-radius: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 600;
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.brand1};
  color: ${({ theme }) => theme.colors.whiteFixed};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.brand3};
    color: ${({ theme }) => theme.colors.brand4};
    cursor: not-allowed;
  }
`;
