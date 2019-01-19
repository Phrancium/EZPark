import React, { Component } from 'react';
import Contract from '../../classes/Contract';
import Vehicle from '../../classes/Vehicle';

const initialState = {
  createContrat: false,
  smartContracts: [],
  vehicles: [],
};

class Map extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
  }

  addContract(contract) {
    let smartContracts = [...this.state.smartContracts];
    smartContracts.append(contract);
    this.setState({
      smartContracts: smartContracts
    });
  }

  fetchVehicles() {

  }

  trackPayment() {
    
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
