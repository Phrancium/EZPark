import React, { Component } from 'react';
import './App.css';

import Error from './components/Error';
import Pending from './components/Pending';
import Setup from './components/Setup';
import Map from './components/Map';

const initialState = {
  address: '',
  email: '',
  initialized: false,
  smartContracts: [],
  vehicles: [],
  error: null,
  pending: false,
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  resetState() {
    this.setState(initialState);
  }

  setAddress(val) {
    this.setState({address: val});
  }

  setEmail(val) {
    this.setState({email: val});
  }

  submitSetup() {
    this.setState({initialized: true});
  }

  render() {
    if (this.state.error) {
      return (
        <Error error={this.state.error} resetState={() => this.resetState()} />
      )
    }
    if (this.state.pending) {
      return (
        <Pending />
      )
    }
    if (!this.state.initialized) {
      return (
        <Setup
          email={this.state.email}
          setemail={val => this.setEmail(val)}
          address={this.state.address}
          setAddress={val => this.setAddress(val)}
          submitSetup={() => this.submitSetup()}
        />
      )
    }
    return (
      <Map />
    );
  }
}

export default App;
