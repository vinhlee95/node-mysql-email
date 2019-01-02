import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

import {
	Icon
} from '../UI';

class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: null,
			editingUser: null,
			editingEmail: '',
		}
	}

	componentDidUpdate(prevProps) {
		if(prevProps.users !== this.props.users) {
			this.setState({ users: this.props.users })
		}
	}

	isUserEditing = (email) => {
		if(!this.state.editingUser) { return false };
		return this.state.editingUser.email === email;
	};

	cancelEditing = () => this.setState({ editingUser: null });

	editEmail = event => this.setState({ editingEmail: event.target.value })

	deleteUser = (email) => {
		axios.delete(`${process.env.REACT_APP_API}/delete`, { data: {email} }).then(res => {
			this.props.updateUserList();
		}).catch(err => console.log(err))
	}

	editUser = (user) => this.setState({
		editingUser: user,
		editingEmail: user.email
	});

	updateUser = (id) => {
		const { editingEmail } = this.state;
		axios.post(`${process.env.REACT_APP_API}/update`, {id, email:editingEmail})
			.then(res => {
				this.props.updateUserList();
			})
			.catch(err => console.log(err));
	}

	renderEditingButtons = (id) => {
		return(
			<div>
				<Icon name='done' onClick={() => this.updateUser(id)} />
				<Icon name='cancel' onClick={this.cancelEditing} />
			</div>
		)
	}

	renderUser = user => {
		const { id, email, created_at } = user;
		return(
			<tr key={id} className='user-item-container'>
				{
					this.isUserEditing(email) ?
					<input
						type='text'
						value={this.state.editingEmail}
						onChange={this.editEmail}
					/> :
					<td>{email}</td>
				}
				<td>{moment(created_at).fromNow()}</td>
				<div className='icons-container'>
					<Icon name='delete' className='delete-icon' onClick={() => this.deleteUser(email)} />
					<Icon name='edit' className='edit-icon' onClick={() => this.editUser(user)} />
					{
						this.isUserEditing(email) ?
						this.renderEditingButtons(id) :
						null
					}
				</div>
			</tr>
		)
	}

	render() {
		const { users } = this.state;
		if(!users) { return null };
		return (
			<div className='user-info-container'>
				<h2>Users information</h2>
				<table>
					<tbody>
						<tr>
							<th>Email</th>
							<th>Join from</th>
						</tr>
						{
							users.length > 0 &&
							users.map(user => this.renderUser(user))
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default UserList;
