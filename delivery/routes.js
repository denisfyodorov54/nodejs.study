import express from "express";
import fetchData from "../services/fetchData.js";

const router = express.Router();

router.get("/api/meteors", async (request, response) => {
  try {
    const NearEarthObjects = await fetchData();
    return response.json(NearEarthObjects);
  } catch (error) {
    return response.status(500).json({ error: "Unable to retrieve data" });
  }
});

router.get('*', async (request, response) => {
    response.status(404).json({ error: "Page not found" });;
  });

export default router;