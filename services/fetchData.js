import getData from "../repository/nasaRepository.js";
import mapData from "../helper/dataMapper.js";

const fetchData = async () => {
  const NearEarthObjects = await getData();
  const result = await mapData(NearEarthObjects);
  return result;
};

export default fetchData;