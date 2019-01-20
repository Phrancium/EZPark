const Contract = (latitude='', longitude='', radius=2.4, cost='') => {
  return {
    id:  '_' + Math.random().toString(36).substr(2, 9),
    longitude: longitude,
    latitude: latitude,
    radius: radius,
    cost: cost,
    active: false
  };
}

export default Contract;