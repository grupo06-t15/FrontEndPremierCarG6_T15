import { useContext } from "react";
import { ModalContext } from "../../providers/ModalProvider";
import {
    AvatarContainer,
    CreateAnnounceBtn,
    Description,
    InfoContainer,
    NameContainer,
} from "./styled";

export const AdvertiserInformation = () => {
    const { setModalType } = useContext(ModalContext);

    return (
        <InfoContainer>
            <AvatarContainer>
                <p>SL</p>
            </AvatarContainer>
            <NameContainer>
                <h4>Samuel Leão</h4>
                <span>Anunciante</span>
            </NameContainer>
            <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s
            </Description>
            <CreateAnnounceBtn onClick={(e) => setModalType("createAnnounce")}>
                Criar anuncio
            </CreateAnnounceBtn>
        </InfoContainer>
    );
};
