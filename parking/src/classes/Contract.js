const Contract = (longitude='', latitude='', radius=2.4, cost='') => {
  return {
    longitude: longitude,
    latitude: latitude,
    radius: radius,
    cost: cost,
    active: false
  };
}

export default Contract;