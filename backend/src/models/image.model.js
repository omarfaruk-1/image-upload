import mongoose, { Types } from "mongoose";


const imageSchema= new mongoose.Schema({
    imageURL:{
        type:String,
        required:["Image required",true]
    },
    title:{
        type:String,
        required:["Image title",true]
    }
})

const imageModel= mongoose.model("imageUpload",imageSchema);

export default imageModel;