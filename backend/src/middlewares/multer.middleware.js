import multer from "multer";

const upload=multer({storage:multer.memoryStorage()});

const uploadMiddleware=upload.single("image");


export default uploadMiddleware;