import React, { Component } from 'react';

class Error extends Component {

  render() {
    return (
      <div id="Error">
        <h1>Error</h1>
        <p>{this.props.error}</p>
        <button onClick={() => this.props.resetState()}>Restart</button>
      </div>
    );
  }
}

export default Error;
