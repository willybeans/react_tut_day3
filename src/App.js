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
  this.handleClick = this.handleClick.bind(this);
}

handleClick(){
  alert('hello from app.js!');
}

  render() {
    return (
      <div className="App">
        {this.state.soState}
        <MyComponent
          passedState={this.state.soState}
          userClick={this.handleClick}
         />
      </div>
    );
  }
}


export default App;
