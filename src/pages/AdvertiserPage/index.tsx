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

// const announceMock = [
//   {
//     id: '29cd544a-7858-40c0-9443-867e08937316',
//     brand: 'chevrolet',
//     model: 'bolt ev premier 203cv (elétrico)',
//     year: 2022,
//     fuel: 'elétrico',
//     mileage: 2000,
//     color: 'branco',
//     price: 280000,
//     fipePrice: 282045,
//     description: 'Carro de teste',
//     published: false,
//     createdAt: '2023-08-09T19:01:29.074Z',
//     updatedAt: '2023-08-09T20:53:00.106Z',
//     images: [
//       {
//         id: '863a04df-b776-489f-88e2-9257b77c7c0d',
//         name: 'imagem teste 2',
//         url: 'src/assets/car.svg',
//       },
//     ],
//   },
//   {
//     id: '29cd544a-7858-40c0-9443-867e08937316',
//     brand: 'chevrolet',
//     model: 'bolt ev premier 203cv (elétrico)',
//     year: 2022,
//     fuel: 'elétrico',
//     mileage: 2000,
//     color: 'branco',
//     price: 280000,
//     fipePrice: 282045,
//     description: 'Carro de teste',
//     published: false,
//     createdAt: '2023-08-09T19:01:29.074Z',
//     updatedAt: '2023-08-09T20:53:00.106Z',
//     images: [
//       {
//         id: '863a04df-b776-489f-88e2-9257b77c7c0d',
//         name: 'imagem teste 2',
//         url: 'src/assets/car.svg',
//       },
//     ],
//   },
//   {
//     id: '29cd544a-7858-40c0-9443-867e08937316',
//     brand: 'chevrolet',
//     model: 'bolt ev premier 203cv (elétrico)',
//     year: 2022,
//     fuel: 'elétrico',
//     mileage: 2000,
//     color: 'branco',
//     price: 280000,
//     fipePrice: 282045,
//     description: 'Carro de teste',
//     published: false,
//     createdAt: '2023-08-09T19:01:29.074Z',
//     updatedAt: '2023-08-09T20:53:00.106Z',
//     images: [
//       {
//         id: '863a04df-b776-489f-88e2-9257b77c7c0d',
//         name: 'imagem teste 2',
//         url: 'src/assets/car.svg',
//       },
//     ],
//   },
//   {
//     id: '29cd544a-7858-40c0-9443-867e08937316',
//     brand: 'chevrolet',
//     model: 'bolt ev premier 203cv (elétrico)',
//     year: 2022,
//     fuel: 'elétrico',
//     mileage: 2000,
//     color: 'branco',
//     price: 280000,
//     fipePrice: 282045,
//     description: 'Carro de teste',
//     published: false,
//     createdAt: '2023-08-09T19:01:29.074Z',
//     updatedAt: '2023-08-09T20:53:00.106Z',
//     images: [
//       {
//         id: '863a04df-b776-489f-88e2-9257b77c7c0d',
//         name: 'imagem teste 2',
//         url: 'src/assets/car.svg',
//       },
//     ],
//   },
//   {
//     id: '29cd544a-7858-40c0-9443-867e08937316',
//     brand: 'chevrolet',
//     model: 'bolt ev premier 203cv (elétrico)',
//     year: 2022,
//     fuel: 'elétrico',
//     mileage: 2000,
//     color: 'branco',
//     price: 280000,
//     fipePrice: 282045,
//     description: 'Carro de teste',
//     published: false,
//     createdAt: '2023-08-09T19:01:29.074Z',
//     updatedAt: '2023-08-09T20:53:00.106Z',
//     images: [
//       {
//         id: '863a04df-b776-489f-88e2-9257b77c7c0d',
//         name: 'imagem teste 2',
//         url: 'src/assets/car.svg',
//       },
//     ],
//   },
//   {
//     id: '29cd544a-7858-40c0-9443-867e08937316',
//     brand: 'chevrolet',
//     model: 'bolt ev premier 203cv (elétrico)',
//     year: 2022,
//     fuel: 'elétrico',
//     mileage: 0,
//     color: 'branco',
//     price: 280000,
//     fipePrice: 282045,
//     description: 'Carro de teste',
//     published: true,
//     createdAt: '2023-08-09T19:01:29.074Z',
//     updatedAt: '2023-08-09T20:53:00.106Z',
//     images: [
//       {
//         id: '863a04df-b776-489f-88e2-9257b77c7c0d',
//         name: 'imagem teste 2',
//         url: 'src/assets/car.svg',
//       },
//     ],
//   },
// ];

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
