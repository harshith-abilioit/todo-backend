import taskSchema from "../models/taskSchema.js";

export const getTasks = async(req,res)=>{
      try{
        const Tasks = await taskSchema.find();
        res.status(200).json({Tasks})
      }catch(err){
        console.log("error", err);
      }
}


// Adding a task
export const addTask = async(req,res)=>{
    console.log(req.body,"body")
    try {
        const { title, description, status } = req.body;

        if (!title || !description || !status) {
            return res.status(400).json({ message: "Please fill the details" });
        }

        const nextTask = taskSchema({
          title:title,
          description:description,
          taskstatus:status
        })
        
        const newTask = await taskSchema.create(nextTask);

        // Log the created task
        console.log(newTask);

        return res.status(200).json({ message: "Task is Added" });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

// Edit a task
export const editTask = async(req,res)=>{
  
        try {
            const { title, description,status } = req.body;
            const taskId = req.params.id;
    
            // Check if required fields are present
            if (!title || !description || !status) {
                return res.status(400).json({ message: "Please fill the details" });
            }
    
            // Assuming taskSchema is a model or schema for your tasks
            // Replace taskSchema.findByIdAndUpdate with the appropriate method for your database
            // (e.g., taskSchema.updateOne for MongoDB)
            // Also, make sure to handle any validation or errors appropriately
            const updatedTask = await taskSchema.findByIdAndUpdate(taskId, req.body);
    
            if (!updatedTask) {
                return res.status(404).json({ message: "Task not found" });
            }
    
            return res.status(200).json({ message: "Task is Updated" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }

}


//Delete a task
export const deleteTask = async(req,res)=>{
    try {
        await taskSchema.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Task is deleted" });
      } catch (e) {
        console.log(e);
      }
}
