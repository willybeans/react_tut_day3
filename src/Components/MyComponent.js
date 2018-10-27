import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
  super(props);
  this.state = {
    componentState: 'I am your ‘components state’'
  };
  this.handleClick = this.handleClick.bind(this);
}

handleClick(){
  this.props.passStateUp(this.state.componentState);
}

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1> Hello from your new component </h1>
        <h2>{this.props.passedState}</h2>

      </div>
    );
  }

}

export default MyComponent;
