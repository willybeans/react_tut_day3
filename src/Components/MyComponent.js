import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
  super(props);
  this.state = {
    componentState: 'I am your ‘components state’'
  };
}

  render() {
    return (
      <div>
        <h1> Hello from your new component </h1>
        <h2>{this.props.passedState}</h2>
            {this.state.componentState}
      </div>
    );
  }

}

export default MyComponent;
