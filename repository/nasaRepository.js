import axios from "axios";
import { NASA_API_KEY, NASA_API_URL } from "../config.js";
import { getDates } from "../helper/dataMapper.js";

const getData = async (date) => {
  const { fromDate, toDate } = getDates(date);
  const url = `${NASA_API_URL}?start_date=${fromDate}&end_date=${toDate}&api_key=${NASA_API_KEY}`;
  console.log(url);

  const result = await axios.get(url);

  return result.data.near_earth_objects;
};

export default getData;