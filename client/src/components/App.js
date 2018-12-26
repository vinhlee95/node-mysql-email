import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

class App extends Component {

	componentDidMount() {
		const API = process.env.REACT_APP_API;
		axios.get(API).then(res => {
			console.log(res)
		})
	}

  render() {
    return (
      <div className="App">
        <h1>Join Us!</h1>
				<Form />
      </div>
    );
  }
}

export default App;
