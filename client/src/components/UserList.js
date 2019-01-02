import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Table } from '../UI';

class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: null,
			editingUser: null,
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

	editEmail = event => {
		event.preventDefault();
		const { users, editingUser } = this.state;
		const index = users.indexOf(editingUser)
		const newEmail = event.target.value;
		const updatedUser = {
			...editingUser,
			email: newEmail
		};
		const updatedUsers = [...users];
		updatedUsers.splice(index, 1, updatedUser);
		this.setState({
			editingUser: updatedUser,
			users: updatedUsers
		})
	}

	deleteUser = (email) => {
		axios.delete(`${process.env.REACT_APP_API}/delete`, { data: {email} }).then(res => {
			this.props.updateUserList();
		}).catch(err => console.log(err))
	}

	editUser = (user) => this.setState({ editingUser: user });

	renderUser = user => {
		const { email, created_at } = user;
		return(
			<tr key={email} className='user-item-container'>
				{
					this.isUserEditing(email) ?
					<input
						type='text'
						autoFocus
						value={this.state.editingUser.email}
						onChange={this.editEmail}
					/> :
					<td>{email}</td>
				}
				<td>{moment(created_at).fromNow()}</td>
				<div className='icons-container'>
					<i
						className="material-icons delete-icon"
						onClick={() => this.deleteUser(email)}
					>
						delete
					</i>
					<i
						className="material-icons edit-icon"
						onClick={() => this.editUser(user)}
					>
						edit
					</i>
					{
						this.isUserEditing(email) ?
						<i
							className='material-icons done-button'
						>
							done
						</i>
						: null
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
				<Table>
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
				</Table>
			</div>
		)
	}
}

export default UserList;
