import React, { Component } from 'react';
import './Setup.css';

class Setup extends Component {

  render() {
    return (
      <div id='Setup'>
        <h1>Setup</h1>
        <input
          name='address'
          value={this.props.address}
          onChange={e => this.props.setAddress(e.target.value)}
          placeholder='Address'
        />
        <input
          name='nteract'
          value={this.props.nteract}
          onChange={e => this.props.setNteract(e.target.value)}
          placeholder='Nteract'
        />
        <button onClick={() => this.props.submitSetup()}>
          Submit
        </button>
      </div>
    );
  }
}

export default Setup;
