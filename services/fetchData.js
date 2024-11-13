import getData from "../repository/nasaRepository.js";
import { mapData, filterNearEarthObjects } from "../helper/dataMapper.js";

const fetchData = async (date, count, wereDangerousMeteors) => {
  const nearEarthObjects = await getData(date);
  const result = await mapData(nearEarthObjects);
  const filteredNearEarthObjects = await filterNearEarthObjects(
    result,
    count,
    wereDangerousMeteors
  );
  return filteredNearEarthObjects;
};

export default fetchData;