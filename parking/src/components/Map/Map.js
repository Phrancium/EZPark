import React, { Component } from 'react';
import CreateContract from './CreateContract';
import ContractList from './ContractList';
import './Map.css';

function measure(lat1, lon1, lat2, lon2){  // generally used geo measurement function
  var R = 6378.137; // Radius of earth in KM
  var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
  var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
  Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d * 1000; // meters
}

const initialState = {
  smartContracts: [{longitude: 0, latitude: 0, radius: 2.4, cost: 1, active: false}, {longitude: 0, latitude: 0, radius: 2.4, cost: 1, active: false}],
  vehicles: [],
};

class Map extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
  }

  addContract(contract) {
    let smartContracts = [...this.state.smartContracts];
    smartContracts.push(contract);
    console.log(smartContracts);
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
        <ContractList
          contracts={this.state.smartContracts}
        />
        <CreateContract
          addContract={val=>this.addContract(val)}
        />
      </div>
    );
  }
}

export default Map;
