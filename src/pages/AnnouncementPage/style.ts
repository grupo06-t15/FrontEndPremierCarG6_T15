import { styled } from "styled-components";

export const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.2rem;
	background-color: ${({ theme }) => theme.colors.grey8};

	footer {
		position: relative;
	}
`;

export const AnnouncementImage = styled.div`
	margin-top: -180px;
	height: 300px;
	width: 600px;
	background-color: ${({ theme }) => theme.colors.grey10};
	border-radius: 6px;
	z-index: 1;
`;

export const AnnoucementData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 210px;
	width: 600px;
	padding: 1.6rem;
	gap: 2rem;
	background-color: ${({ theme }) => theme.colors.grey10};
	border-radius: 6px;
`;

export const AnnouncementDescription = styled.div`
	display: flex;
	flex-direction: column;
	height: 200px;
	width: 600px;
	padding: 1.6rem;
	gap: 1rem;
	background-color: ${({ theme }) => theme.colors.grey10};
	border-radius: 6px;
`;

export const Data = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		display: flex;
		align-items: center;
		border-radius: 6px;
		gap: 1rem;

		span {
			line-height: 30px;
			vertical-align: middle;
			text-align: center;
			padding: 0.2rem 0.6rem;
			background-color: ${({ theme }) => theme.colors.brand4};
			color: ${({ theme }) => theme.colors.brand1};
			border-radius: 6px;
		}
	}
`;

export const ButtonBuy = styled.button`
	height: 40px;
	width: 100px;
	border-radius: 6px;
	font-weight: "Body-2-400";
	background-color: ${({ theme }) => theme.colors.brand1};
	color: ${({ theme }) => theme.colors.whiteFixed};
`;
