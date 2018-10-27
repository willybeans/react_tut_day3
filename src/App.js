import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/MyComponent';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    soState: 'I am your app.js ‘state’'
  };
}

  render() {
    return (
      <div className="App">
        {this.state.soState}
        <MyComponent
          passedState={this.state.soState}
         />
      </div>
    );
  }
}


export default App;
