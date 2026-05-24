import express from "express";
import { getImages, uploadImage } from "../controllers/image.controller.js";
import uploadMiddleware from "../middlewares/multer.middleware.js";


const imageRoute=express.Router();


imageRoute.post("/image-upload",uploadMiddleware,uploadImage)
imageRoute.get("/get-images",getImages);

export default imageRoute;