import express from "express";
import imageRoute from "./routes/image.route.js";

const app= express();
app.use(express.json());

app.use("/api",imageRoute);


export default app;