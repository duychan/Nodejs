import express from "express"
import studentController from "../controllers/student.js"
import { body, validationResult } from 'express-validator';

const studentRouter = express.Router()

studentRouter.get("/", studentController.httpGetAllStudents)
studentRouter.get("/:id", studentController.httpGetStudentbyId)
studentRouter.post("/insert", studentController.httpInsertStudent)
studentRouter.patch("/update/:id", studentController.httpUpdateStudent)
studentRouter.delete("/delete/:id", studentController.httpDeleteStudent)

export default studentRouter

