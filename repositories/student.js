
import Student from "../models/students.js"


async function getAllStudents(pagin){
    let {limit, skip} = pagin
    if(!pagin?.skip || !pagin?.limit){
        skip = 0
        limit = 10
    }
    const students = await Student.find().limit(limit).skip(skip)
    return students
}

async function getStudentbyId(id){
    try{
        const student = await Student.findById(id)
        if(!student){
            return {
                type: "Error",
                message: `No user found with id ${id}`,
                statusCode: 404
            }
        }
        return {
            type: "Success",
            message: "Successfuly found the user",
            statusCode: 201,
            student
        }
    }
    catch(err){
        return {
            type: "Error",
            message: `Invalid value`,
            statusCode: 400
        }
    }
}


async function addStudent(student){
    const studentFound = await Student.findOne({email: student.email})
    if(!studentFound){
        const newStudent = await Student.create(student)
        return newStudent
    }
    throw new Error("123")
}

async function updateStudent(student){
    let studentFound = {}
    try{
        studentFound = await Student.findById(student.id)
    }
    catch(err){
        return false
    }
    if(!studentFound){
        return false
    }
    await studentFound.updateOne(student)
    return studentFound
}

async function deleteStudent(id){
    let studentFound = {}
    try{
        studentFound = await Student.findById(id)
    }
    catch(err){
        console.log(err.reason)
        return false
    }
    if(!studentFound){
        return false
    }
    try{
        await Student.deleteOne({id})
    }
    catch(err){
        console.log(err)
    }
    return true
}

export default {
    getAllStudents,
    getStudentbyId,
    addStudent,
    updateStudent,
    deleteStudent
}