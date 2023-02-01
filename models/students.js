import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name :{
        type: String,
        minLength: 5,
        required: true,
    },
    email:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true,
        enum:{
            values: ["male", "female"]
        }
    },
    phoneNumber:{
        type: String,
        require: true,
        maxLength:[10, "Must be at least 10, got {VALUES}"],
        minLength: [10, "Must be at least 10, got {VALUES}"],
    },
    major:{
        require: true,
        type: [String]
    },
    address:{
        require: true,
        type: String
    }
})

const Student = mongoose.model("Student", StudentSchema)
export default Student