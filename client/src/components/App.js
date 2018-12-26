import React, { Component } from 'react';
import Form from './Form';

class App extends Component {

	componentDidMount() {
		console.log(process.env.REACT_APP_API);
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
