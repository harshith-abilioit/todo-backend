import express  from "express";
import { addTask, deleteTask, editTask, getTasks } from "../controllers/taskControllers.js";


const endpoints =  express.Router();

endpoints.get("/tasks", getTasks)
endpoints.post("/addTask", addTask)
endpoints.patch("/edit/:id", editTask)
endpoints.delete("/delete/:id", deleteTask)

export default endpoints