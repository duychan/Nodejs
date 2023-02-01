import studentRepo from "../repositories/student.js";
import pagination from "../services/pagination.js"

async function httpGetAllStudents(req, res){
    const {page, limit} = req.query
    const pagin = pagination(page, limit)
    const students = await studentRepo.getAllStudents(pagin)
    if(!students){
        res.status(400).json({
            message: "can't get students",
            data: "hehe"
        })
    }
    res.status(200).json({
        message: "get all students",
        data: students
    })
}

async function httpGetStudentbyId(req, res){
    const {id} = req.params
    const {type, message, statusCode, ...studentFound} = await studentRepo.getStudentbyId(id)
    if(type == "Error"){
        return res.status(statusCode).json({
            type,
            message
        })
    }
    return res.status(statusCode).json({
        type,
        message,
        data: studentFound
    })
}

async function httpInsertStudent(req, res){
    const {name, email, gender, 
        major, address, phoneNumber} = req.body
    const newStudent = Object.assign({}, 
        {name, email, gender,
        major, address, phoneNumber})
    try{
        const student = await studentRepo.addStudent(newStudent)
        if(!!student){
            res.status(200).json({
                message: "insert student successfully",
                data: newStudent
            })
    }
    }
    catch(err){
        res.status(400).json({
            message: "failed to insert student",
            data: null
        })
    }

}

async function httpUpdateStudent(req, res){
    const {name, email, gender, 
        major, address, phoneNumber} = req.body
    const {id} = req.params
    const newStudentInfo = Object.assign({}, 
        {id, name, email, gender,
        major, address, phoneNumber})
    console.log(id)
    const isSuccess = await studentRepo.updateStudent(newStudentInfo)
    if(isSuccess){
        return res.status(200).json({
            message: "update student successfully",
            data: newStudentInfo
        })
    }
    return res.status(400).json({
        message: "failed to update student",
        data: null
    })
}

async function httpDeleteStudent(req, res){
    const {id} = req.params
    const isSuccess = await studentRepo.deleteStudent(id)
    if(isSuccess){
        return res.status(200).json({
            message: "delete student successfully",
            id_student: id
        })
    }
    return res.status(400).json({
        message: "failed to delete student",
        data: null
    })
}

export default{
    httpGetAllStudents,
    httpGetStudentbyId,
    httpUpdateStudent,
    httpDeleteStudent,
    httpInsertStudent
}