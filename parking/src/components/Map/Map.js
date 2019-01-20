import React, { Component } from 'react';
import CreateContract from './CreateContract';
import ContractList from './ContractList';
import Vehicle from '../../classes/Vehicle';

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
  smartContracts: [],
  vehicles: [],
};

class Map extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.fetchVehicles();
    this.interval = setInterval(() => {
      this.fetchVehicles();
    }, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  addContract(contract) {
    let smartContracts = [...this.state.smartContracts];
    smartContracts.push(contract);
    this.setState({
      smartContracts: smartContracts
    });
    this.fetchVehicles();
  }

  async fetchVehicles() {
    const response = await fetch('https://kevcpro.lib.id/smartpark/getLocation/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG' 
        }
      });
    const json = await response.json();

    const fetched = json;
    console.log(fetched);

    const closestPark = fetched.map((v) => {
      const distances = this.state.smartContracts.map((c) => {
        const dist = measure(v.latitude, v.longitude, c.latitude, c.longitude);
        return {distance: dist, contract: c};
      });

      distances.sort((a,b) => {
        return a.distance - b.distance
      });
      
      let closest = null;
      if(distances.length > 0){
        closest = distances[0];
      }
      return {id: v.id, closest: closest};
    });

    console.log(closestPark);

    const parked = closestPark.filter((v) => {
      if(v.closest === null)
        return false
      return v.closest.distance < v.closest.contract.radius;
    });

    console.log(parked);

    const justLeft = this.state.vehicles.filter((v) => {
      const stillParked = parked.filter((p) => {
        const stillHere = p.id === v.id;
        const atSameLocation = p.closest !== null && 
          v.contract === p.closest.contract.id;
        return stillHere && atSameLocation;
      });

      return stillParked.length === 0;
    });

    console.log(justLeft);

    justLeft.forEach((j) => {
      this.issuePayment(j);
    })

    const newVehicles = parked.map((p) => {

      const alreadyParked = this.state.vehicles.filter((v) => {
        const alreadyHere = p.id === v.id;
        const atSameLocation = p.closest !== null && 
          v.contract === p.closest.contract.id;
        return alreadyHere && atSameLocation;
      });

      let fee = 0;
      if (alreadyParked.length > 0) {
        fee = alreadyParked[0].fee;
      }

      return Vehicle(p.id, p.closest.contract.id, fee);
    });

    console.log(newVehicles);

    this.setState({
      vehicles: newVehicles
    })

    this.trackPayment();
  }

  trackPayment() {
    let vehicles = [...this.state.vehicles];
    let smartContracts = [...this.state.smartContracts];

    vehicles.forEach((v) => {
      const contract = smartContracts.filter((c) => {
        return c.id === v.contract;
      });

      v.fee += contract[0].cost;
    });

    smartContracts.forEach((c) => {
      const vehicle = vehicles.filter((v) => {
        return c.id === v.contract;
      });

      if(vehicle.length === 0){
        c.active = null;
      }
      else {
        c.active = vehicle;
      }
    });

    this.setState({
      smartContracts: smartContracts,
      vehicles: vehicles
    });
  }

  issuePayment(v) {
    fetch('https://kevcpro.lib.id/smartpark/requestMoney/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG' 
        },
        body: JSON.stringify({
          key: v.id,
          amount: v.fee
        })
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(JSON.stringify(myJson));
        });
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
