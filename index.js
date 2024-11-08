import dotenv from "dotenv";
import express from "express";
import router from "./delivery/routes.js";

dotenv.config();
const { PORT } = process.env;

const app = express();
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is up and running at port: ${PORT}`);
});