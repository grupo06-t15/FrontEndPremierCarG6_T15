import { IAnnounce } from '../../providers/@types';
import {
  AnnouceDescription,
  AnnounceBtnContainer,
  AnnounceCardContainer,
  AnnounceImageContainer,
  AnnounceStatus,
  AnnounceTitle,
  PriceContainer,
} from './styled';

interface AdvertiseCardProps {
  announce: IAnnounce;
}

export const AdvertiseCard = ({ announce }: AdvertiseCardProps) => {
  return (
    <AnnounceCardContainer key={announce.id}>
      <AnnounceImageContainer>
        <img src={announce.images[0].url} alt={announce.images[0].name} />
        <AnnounceStatus className={announce.published ? 'ativo' : 'inativo'}>
          {announce.published ? 'Ativo' : 'Inativo'}
        </AnnounceStatus>
      </AnnounceImageContainer>
      <AnnounceTitle>{announce.model}</AnnounceTitle>
      <AnnouceDescription>
        {announce.description || 'Descrição não disponível...'}
      </AnnouceDescription>
      <PriceContainer>
        <div>
          <span>{announce.mileage + ' KM'}</span>
          <span>{announce.year}</span>
        </div>
        <p>R${` ${announce.price}`}</p>
      </PriceContainer>
      <AnnounceBtnContainer>
        <button>Editar</button>
        <button>Ver detalhes</button>
      </AnnounceBtnContainer>
    </AnnounceCardContainer>
  );
};
