import { styled } from "styled-components";

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
