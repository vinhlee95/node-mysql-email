import React, { Component } from 'react';
import moment from 'moment';
import { Table, DeleteButton } from '../UI';

class UserList extends Component {

	renderUser = user => {
		const { email, created_at } = user;
		return(
			<tr key={email}>
				<td>{email}</td>
				<td>{moment(created_at).fromNow()}</td>
				<DeleteButton>X</DeleteButton>
			</tr>
		)
	}

	render() {
		const { users } = this.props;
		return (
			<div>
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
