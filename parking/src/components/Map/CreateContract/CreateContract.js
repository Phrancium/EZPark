import React, { Component } from 'react';
import Contract from '../../classes/Contract';

const initialState = Contract();

class Map extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
  }

  setLongitude(val) {
    this.setState({longitude: val});
  }

  setLatitude(val) {
    this.setState({latitude: val});
  }

  setRadius(val) {
    
  }

  setCost(val) {
    this.setState({cost: val});
  }

  addContract() {
    return Contract(...this.state);
  }

  setError(val) {
    this.props.setError(val);
  }

  render() {
    return (
      <div id="Map">
      </div>
    );
  }
}

export default Map;
