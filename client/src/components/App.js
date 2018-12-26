import React, { Component } from 'react';

class App extends Component {

	componentDidMount() {
		console.log(process.env.REACT_APP_API);
	}

  render() {
    return (
      <div className="App">
        <h1>Join Us!</h1>
      </div>
    );
  }
}

export default App;
