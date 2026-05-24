import mongoose from "mongoose";
import appConfig from "../config/appConfig.js";

async function connectDb(){
    try {
        await mongoose.connect(appConfig.DB_URI);
        console.log("ConnectDB")
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDb;