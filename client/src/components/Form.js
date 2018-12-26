import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	padding: 5px 5px;
	border-radius: 3px;
	border: 1px solid lightgrey;
	cursor: pointer;
`

const Input = styled.input`
	padding: 5px 5px;
	border-radius: 3px;
	border: 1px solid lightgrey;
	margin-right: 5px;

	:focus {
		outline: none;
	}
`

class Form extends Component {

	submitUser = (e) => {
		e.preventDefault();

	}

	render() {
		return (
			<form onSubmit={this.submitUser}>
				<Input
					placeholder='Enter your email'
				/>
				<Button
					type='submit'
					onClick={this.submitUser}
				>
					Join now
				</Button>
			</form>
		)
	}
}

export default Form;
