import styled from 'styled-components';

export const Input = styled.input`
	padding: 5px 5px;
	border-radius: 3px;
	border: 1px solid lightgrey;
	margin-right: 5px;

	:focus {
		outline: none;
	}
`

export const Button = styled.button`
	padding: 5px 5px;
	border-radius: 3px;
	border: 1px solid lightgrey;
	cursor: pointer;
`

export const DeleteButton = styled.button`
	padding: 10px 10px;
	border-radius: 50%;
	color: #fff;
	background: red;
	cursor: pointer;

	:hover {
		background: orange;
	}
`

export const Table = styled.table`
	border: 1px solid lightgrey;
	border-radius: 3px;
	padding: 10px 10px;
`;

