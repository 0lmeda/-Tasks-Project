import tasksServices from "../services/tasks.services.js";


const getTasks = (req,res, next) =>{
    try{
        const allTasks = tasksServices.getAllTasks();
        res.status(200).json({
            success: true,
            data: allTasks
        });
    }catch(error){
        next(error);
    }

};

export const addTask = (req,res,next)=>{
    try{
        const params = req.body;
        
        const newTask = tasksServices.createTask(params);

        res.status(201).json({
            success: true,
            data: newTask
        });
    }catch(error){
        next(error);
    }
}

export default{
    getTasks,
    addTask
}