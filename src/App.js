import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/MyComponent';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    soState: 'I am your ‘state’'
  };
}

  render() {
    return (
      <div className="App">
        {this.state.soState}
        <MyComponent
          passedState={this.state.soState}
          user='Johnny'
         />
      </div>
    );
  }
}


export default App;
