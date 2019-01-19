import React, { Component } from 'react';
import './App.css';

import Error from './components/Error';
import Pending from './components/Pending';
import Setup from './components/Setup';
import Map from './components/Map';

const initialState = {
  address: '',
  nteract: '',
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

  setNteract(val) {
    this.setState({nteract: val});
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
          nteract={this.state.nteract}
          setNteract={val => this.setNteract(val)}
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
