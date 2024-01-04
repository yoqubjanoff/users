import styled from 'styled-components';

export const Container = styled.div`
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '60px')};
	border-radius: ${({ br }) => (br ? br : '8px')};
	box-shadow: ${({ bsh }) =>
		bsh ? bsh : '0px 13px 32px 0px rgba(28, 41, 60, 0.10)'};
	transition: all 0.3s;
	outline: none;
	display: flex;
	padding: ${({ padding }) => (padding ? padding : '0 15px')};
	background-color: ${({ bg }) => (bg ? bg : 'inherit')};
	align-items: center;
	border: 1px solid #e1e1e1;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	border: ${({ focus, error }) =>
		focus
			? '1px solid #37A67E'
			: error
			? '1px solid #FF0000'
			: '1px solid #EBEBEB'};
	box-shadow: ${({ focus }) =>
		focus && '0px 0px 0px 2px rgba(170, 236, 199, 0.60)'};
	box-shadow: ${({ error }) =>
		error && '0px 0px 0px 2px rgba(255, 80, 80, 0.30)'};
	position: relative;
`;

Container.Wrap = styled.div`
	width: ${({ width }) => (width ? width : '100%')};
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: flex-start;
`;
Container.Header = styled.div`
	color: ${({ hc, error }) => (hc ? hc : error ? '#FF0000' : '#000')};
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
`;

Container.Input = styled.input`
	width: 100%;
	height: 90%;
	border: none;
	outline: none;
	display: flex;
	appearance: none;
	align-items: center;
	transition: all 0.3s;
	color: ${({ color }) => (color ? color : '#fff')};
	background-color: ${({ bg }) => (bg ? bg : 'inherit')};
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	&::placeholder {
		color: ${({ placeholderColor }) =>
			placeholderColor ? placeholderColor : '#000'};
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
	}
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`;

Container.Error = styled.div`
	position: absolute;
	color: #f00;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	top: 62px;
	left: 0px;
	text-align: left;
`;

export const Icon = styled.div`
	height: 32px;
	margin: ${({ margin }) => (margin ? margin : '0 5px')};
	display: flex;
	align-items: center;
	justify-content: center;
`;
