import React, { Component } from 'react';

class ContractList extends Component {
  render() {
    let active = null;
    if(this.props.active) {
      active = <div className='active'>{this.props.active}</div>;
    }
    else{
      active = <div className='notActive'>Not Active</div>
    }
    return (
      <li className='ContractPanel'>
        <h4>{this.props.latitude}, {this.props.longitude}</h4>
        <p>Radius: {this.props.radius}</p>
        <p>Cost: ${this.props.cost}</p>
        {active}
      </li>
    );
  }
}

export default ContractList;
