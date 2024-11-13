import express from "express";
import fetchData from "../services/fetchData.js";

const router = express.Router();

router.get("/api/meteors", async (request, response) => {
  try {
    const { date, count, wereDangerousMeteors } = request.query;

    const nearEarthObjects = await fetchData(date, count, wereDangerousMeteors);
    return response.json(nearEarthObjects);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

router.get('*', async (request, response) => {
    response.status(404).json({ error: "Page not found" });;
  });

export default router;