import React, { Component } from 'react';
import './Setup.css';

class Setup extends Component {

  render() {
    return (
      <div id='Setup'>
        <h1>Setup</h1>
        <div className='row'>
          <label>Email</label>
          <input
            name='email'
            type='email'
            value={this.props.email}
            onChange={e => this.props.setEmail(e.target.value)}
            placeholder='Email'
          />
        </div>
        <div className='row'>
          <label>Address</label>
          <input
            name='address'
            value={this.props.address}
            onChange={e => this.props.setAddress(e.target.value)}
            placeholder='Address'
          />
        </div>
        <button onClick={() => this.props.submitSetup()}>
          Submit
        </button>
      </div>
    );
  }
}

export default Setup;
