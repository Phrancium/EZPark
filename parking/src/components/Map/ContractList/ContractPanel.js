import React, { Component } from 'react';

class ContractList extends Component {
  render() {
    let active = null;
    if(this.props.active) {
      const vehicles = this.props.active.map((v, i) =>
        <p key={i}><b>{v.id}</b>: ${v.fee.toFixed(2)}</p>
      );

      active = <div className='status active'>{vehicles}</div>;
    }
    else{
      active = <div className='status notActive'><b>Not Active</b></div>
    }
    return (
      <li className='ContractPanel'>
        <h2>{this.props.latitude}, {this.props.longitude}</h2>
        <p>Radius: {this.props.radius}</p>
        <p>Cost: ${this.props.cost}</p>
        {active}
      </li>
    );
  }
}

export default ContractList;
