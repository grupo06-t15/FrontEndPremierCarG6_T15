import { useContext } from "react";
import { ModalContext } from "../../providers/ModalProvider";
import { ModalContainer } from "../ModalContainer";

export const EditUserModal = () => {
	const { modalType } = useContext(ModalContext);

	return (
		<>
			{modalType == "createAnnounce" && (
				<ModalContainer>
					<CreateAnnouceModal />
				</ModalContainer>
			)}
		</>
	);
};
