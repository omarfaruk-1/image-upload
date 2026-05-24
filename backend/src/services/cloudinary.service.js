import imageKit from "@imagekit/nodejs";
import appConfig from "../config/appConfig.js";



const client= new imageKit({
    privateKey:appConfig.IMAGE_KIT_PRIVATE_KEY,
    publicKey:appConfig.IMAGE_KIT_PUBLIC_KEY,
    urlEndPoint:appConfig.IMAGE_KIT_URL_ENDPOINT
})

const uploadFile= async (file)=>{
    if(!file) throw new Error("Image required");

    const result= await client.files.upload({
        file:file.buffer.toString("base64"),
        fileName:`${Date.now()}-${file.originalname}`,
        folder:"uploadImage"
    })

    return result.url;
}

export default uploadFile;