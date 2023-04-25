import { Router } from "express";
import { createTask, getTask, getTasks, updateTask, updateTaskStatus } from "../controllers/task.controller";

const taskRouter = Router()

taskRouter.get('/', getTasks)
taskRouter.post('/create', createTask)
taskRouter.put('/edit/:id', updateTask)
taskRouter.get('/:id', getTask)
taskRouter.patch('/update-status/:id/:status', updateTaskStatus)
taskRouter.delete('/:id', getTask)

export default taskRouter;