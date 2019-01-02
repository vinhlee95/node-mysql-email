import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
	state = {
		email: '',
	}

	submitUser = (e) => {
		e.preventDefault();
		const { email } = this.state;
		const user = { email };
		axios.post(`${process.env.REACT_APP_API}/register`, user).then(res => {
			if(res.data) {
				this.props.updateUserList();
			};
			// clear the input
			this.setState({ email: '' });
		});
	}

	handleChange = (e) => {
		this.setState({ email: e.target.value });
	}

	render() {
		return (
			<form onSubmit={this.submitUser}>
				<input
					placeholder='Enter your email'
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<button
					type='submit'
					onClick={this.submitUser}
				>
					Join now
				</button>
			</form>
		)
	}
}

export default Form;
