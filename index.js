import dotenv from "dotenv";
import axios from "axios";
import express from "express";
dotenv.config();

const app = express();

const apiKey = process.env.NASA_API_KEY;
const port = process.env.PORT;
const monday = '2024-10-28';
const friday = '2024-11-01';

app.listen(port, () => {
    console.log(`Server is up and running at port: ${port}`);
});

const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${monday}&end_date=${friday}&api_key=${apiKey}`;

app.get("/api/meteors", async (request, response) => {
  try {
    const result = await axios.get(apiUrl);
    response.json(result.data);
  } catch (error) {
    response.status(500).json({ error: "Unable to get data" });
  }
});