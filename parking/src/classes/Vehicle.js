const Vehicle = (id, contract, fee=0) => {
  return {
    id: id,
    fee: fee,
    contract: contract
  };
}

export default Vehicle;