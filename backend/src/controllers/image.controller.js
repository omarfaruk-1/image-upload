import imageModel from "../models/image.model.js"
import uploadFile from "../services/cloudinary.service.js"

export async function uploadImage(req,res){
    const title=req.body.title;
    const result = await uploadFile(req.file);
    const imagePost=await imageModel.create({
        title:title,
        imageURL:result
    })

    return res.status(201).json({
        message:"Image post successfully",
        post:imagePost
    })
    
}

export async function getImages(req,res){
    const post=await imageModel.find();
    // console.log(post.imageURL)
    return res.status(200).json({
        message:"all post fetched successfully",
        post:post
    })
}

export async function getPost(req,res){
}