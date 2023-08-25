import { useContext } from 'react';
import { AdvertiseCard } from '../../components/AdvertiseCard';
import { AdvertiserInformation } from '../../components/AdvertiserInformation';
import { CreateAnnouceModal } from '../../components/CreateAnnounceModal';
import { Footer } from '../../components/Footer';
import { ModalContainer } from '../../components/ModalContainer';
import { Navbar } from '../../components/Navbar';
import { ModalContext } from '../../providers/ModalProvider';
import { UserContext } from '../../providers/UserProvider';
import { AnnounceList, MainContainer, PurpleBox } from './styled';

export const AdvertiserPage = () => {
  const { modalType } = useContext(ModalContext);
  const { user } = useContext(UserContext);
  console.log(user.announcements);
  return (
    <MainContainer>
      <Navbar />
      <PurpleBox></PurpleBox>
      <AdvertiserInformation user={user} />
      <AnnounceList>
        {user.announcements?.map((announce) => (
          <AdvertiseCard announce={announce} key={announce.id} />
        ))}
      </AnnounceList>
      <Footer />
      {modalType == 'createAnnounce' && (
        <ModalContainer>
          <CreateAnnouceModal />
        </ModalContainer>
      )}
    </MainContainer>
  );
};
