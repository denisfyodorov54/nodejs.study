import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const apiKey = process.env.NASA_API_KEY;
const monday = '2024-10-28';
const friday = '2024-11-01';

const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${monday}&end_date=${friday}&api_key=${apiKey}`;

await axios
  .get(apiUrl)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error while fetching data", error);
  });