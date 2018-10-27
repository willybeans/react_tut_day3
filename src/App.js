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
  this.passStateUp = this.passStateUp.bind(this);
}

passStateUp(passedState){
  alert(passedState);
}

  render() {
    return (
      <div className="App">
        {this.state.soState}
        <MyComponent
          passedState={this.state.soState}
          passStateUp={this.passStateUp}
         />
      </div>
    );
  }
}


export default App;
