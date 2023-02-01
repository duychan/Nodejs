import express from "express"
import * as dotenv from "dotenv"
dotenv.config()
import connectDB from "./database/connect.js"
import {studentRouter} from "./routers/index.js"
import bodyParse from "body-parser"


const app = express()

app.use(bodyParse.json())
app.use("/student", studentRouter)

const PORT =  process.env.PORT || 3000
async function run(){
   await connectDB()
   app.listen(PORT, ()=>{
      console.log(`Server is running on port ${PORT}`)
   })
}
run()