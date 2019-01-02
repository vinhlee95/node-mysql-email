import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';
import UserList from './UserList';
import '../styles/index.scss';

class App extends Component {
	state = {
		users: [],
	}

	componentDidMount() {
		this.getUsers();
	}

	getUsers = () => {
		const API = process.env.REACT_APP_API;
		axios.get(API).then(res => {
			const users = res.data;
			this.setState({ users });
		}).catch(error => {
			console.log(error);
		})
	}

  render() {
		const { users } = this.state;
    return (
      <div className="App">
        <h1>Join Us!</h1>
				{
					users.length > 0 ?
					`We are having ${users.length} users`
					: null
				}
				<Form updateUserList={this.getUsers} />
				<UserList users={users} updateUserList={this.getUsers} />
      </div>
    );
  }
}

export default App;
