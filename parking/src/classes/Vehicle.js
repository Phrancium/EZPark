const Vehicle = (id, fee, longitude='',latitude='') => {
  return {
    id: id,
    fee: fee,
    longitude: longitude,
    latitude: latitude
  };
}

export default Vehicle;