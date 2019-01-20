import React, { Component } from 'react';
import ContractPanel from './ContractPanel';

class ContractList extends Component {
  render() {
    const listItems = this.props.contracts.map((contract, i) =>
      <ContractPanel key={i} {...contract} />
    );
    return (
      <div id='ContractList'>
        {listItems}
      </div>
    );
  }
}

export default ContractList;
