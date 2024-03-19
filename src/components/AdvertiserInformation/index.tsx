import { useContext } from 'react';
import { IUserData } from '../../providers/@types';
import { ModalContext } from '../../providers/ModalProvider';

import {
    AvatarContainer,
    CreateAnnounceBtn,
    Description,
    InfoContainer,
    NameContainer,
} from "./styled";

interface IAdvertiseInfoProps {
  user: IUserData;
}

export const AdvertiserInformation = ({ user }: IAdvertiseInfoProps) => {
  const { setModalType } = useContext(ModalContext);
  return (
    <InfoContainer>
      <AvatarContainer>
        <p>{`${user.name?.split('')[0].toUpperCase()}${user.name
          ?.split('')[1]
          .toUpperCase()}`}</p>
      </AvatarContainer>
      <NameContainer>
        <h4>{user.name}</h4>
        <span>{user.accountType}</span>
      </NameContainer>
      <Description>{user.description}</Description>
      {user.accountType === 'anunciante' && (
        <CreateAnnounceBtn onClick={() => setModalType('createAnnounce')}>
          Criar anuncio
        </CreateAnnounceBtn>
      )}
    </InfoContainer>
  );

};
