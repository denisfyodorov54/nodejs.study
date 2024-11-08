import axios from "axios";

import { NASA_API_KEY, NASA_API_URL } from "../config.js";

const MONDAY = '2024-10-28';
const FRIDAY = '2024-11-01';

const url = `${NASA_API_URL}?start_date=${MONDAY}&end_date=${FRIDAY}&api_key=${NASA_API_KEY}`;

const getData = async () => {
  const result = await axios.get(url);

  return result.data.near_earth_objects;
};

export default getData;