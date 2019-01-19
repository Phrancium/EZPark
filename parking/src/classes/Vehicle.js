import Coord from './Coord';

const Vehicle = (id, fee, coord) => {
  return {
    id: id,
    fee: fee,
    coord: coord
  };
}

export default Vehicle;