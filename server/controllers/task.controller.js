import { Task } from "../db.js"

export const createTask = async(req, res)=>{
    const {title,description, startTime, endTime } = req.body
    try {
        const newTask = await Task.create({title, description, startTime, endTime})
        res.status(200).json({success:false, message:'new task has been created'})
        
        
        
    } catch (error) {
        console.log('create task error', error)
        res.status(500).json({message:'Something went wrong'})
        
    }

}