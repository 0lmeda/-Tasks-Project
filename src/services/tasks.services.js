const db = [
    {id: "1", title: "Take a shower", status: "false"},
    {id: "2", title: "Get wingstop for dinner", status: "false"},
    {id: "3", title: "Work on the project for 3330", status: "true"},
];

const getAllTasks = () =>{
    return db;
}

export const createTask = (params)=>{
    const newTask = {
            id: Math.max(...db.map( (user) => user.id )) + 1, 
            title: params.title.trim(),
            completed: false
          };

    db.push(newTask); 
    return newTask;
}

export default{
    getAllTasks,
    createTask
}