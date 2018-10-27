import React, { Component } from 'react';

const MyComponent = (props) => {
  return (
    <div>
      <h1> Hello from your new component </h1>
      <h2>{props.passedState}</h2>
      our users name is {props.user}
    </div>
  );
}

export default MyComponent;
