import mongoose from "mongoose";
mongoose.set('strictQuery', true)
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        console.log("Connected to DB...")
    }
    catch(err){
        console.log(err)
    }
}

export default connectDB
