import React, { Component } from 'react';
import Contract from '../../../classes/Contract';

const initialState = {...Contract(), error: null};

class Map extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
    console.log(initialState);
  }

  setLatitude(val) {
    this.setState({latitude: parseFloat(val)});
  }

  setLongitude(val) {
    this.setState({longitude: parseFloat(val)});
  }

  setRadius(val) {
    this.setState({radius: parseFloat(val)});
  }

  setCost(val) {
    this.setState({cost: parseFloat(val)});
  }

  addContract(e) {
    e.preventDefault();
    const contract = Contract(this.state.latitude, this.state.longitude, this.state.radius, this.state.cost);
    this.props.addContract(contract);
    this.setState(initialState);
  }

  setError(val) {
    this.setState({error: <p className='error'>{val}</p>});
  }

  render() {
    return (
      <form id='CreateContract' onSubmit={e => this.addContract(e)}>
        <h2>Create Contract</h2>
        <div className='row'>
          <label>Latitude</label>
          <input
            required
            name='latitude'
            type='number'
            value={this.state.latitude}
            onChange={e => this.setLatitude(e.target.value)}
            placeholder='degrees'
            min="-90"
            max="90"
            step='0.000001'
          />
        </div>
        <div className='row'>
          <label>Longitude</label>
          <input
          required
            name='longitude'
            type='number'
            value={this.state.longitude}
            onChange={e => this.setLongitude(e.target.value)}
            placeholder='degrees'
            min="-180"
            max="180"
            step='0.000001'
          />
        </div>
        <div className='row'>
          <label>Radius</label>
          <input
          required
            name='radius'
            type='number'
            value={this.state.radius}
            onChange={e => this.setRadius(e.target.value)}
            placeholder='meters'
            min="0"
            step='0.01'
          />
        </div>
        <div className='row'>
          <label>Cost</label>
          <input
          required
            name='cost'
            type='number'
            value={this.state.cost}
            onChange={e => this.setCost(e.target.value)}
            placeholder='cad'
            step='0.01'
          />
        </div>
        <button type="submit" value="Submit">Add</button>
      </form>

    );
  }
}

export default Map;
