import React, { Component } from 'react';
import './Setup.css';

class Setup extends Component {

  render() {
    return (
      <form id='Setup' onSubmit={e => this.props.submitSetup(e)}>
        <h1>Setup</h1>
        <div className='row'>
          <label>Email</label>
          <input
            required
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
            required
            name='address'
            value={this.props.address}
            onChange={e => this.props.setAddress(e.target.value)}
            placeholder='Address'
          />
        </div>
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}

export default Setup;
