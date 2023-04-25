import { Request, Response } from "express";
import Task from "../models/Task";
import { ApiResponse } from "../utils/response.util";

export const createTask = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;
        const task = new Task({
            name,
            description
        })
        await task.save();
        return res.status(201).json(new ApiResponse(true, "Task created successfully", { task }))
    } catch (error) {
        console.log(error);
        return res.status(500).json(new ApiResponse(false, "Error creating task", null))
    }
}

export const updateTask = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;
        const { id } = req.params;
        const task = await Task.findById(id)
        if (!task) return res.status(400).json(new ApiResponse(false, "Task doesn't exist", null))
        task.name = name
        task.description = description
        await task.save()
        return res.status(200).json(new ApiResponse(true, "Task updated successfully", { task }))
    } catch (error) {
        console.log(error);
        return res.status(500).json(new ApiResponse(false, "Error updating task", null))
    }
}

export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json(new ApiResponse(true, "Tasks fetched successfully", { tasks }))
    } catch (error) {
        console.log(error);
        return res.status(500).json(new ApiResponse(false, "Error getting task", null))
    }
}

export const getTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id);
        if (!task) return res.status(400).json(new ApiResponse(false, "Task doesn't exist", null))
        return res.status(200).json(new ApiResponse(true, "Task fetched successfully", { task }))
    } catch (error) {
        console.log(error);
        return res.status(500).json(new ApiResponse(false, "Error getting task", null))
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id);
        if (!task) return res.status(400).json(new ApiResponse(false, "Task doesn't exist", null))
        await Task.findByIdAndDelete(id)
        return res.status(200).json(new ApiResponse(true, "Task deleted successfully", { task }))
    } catch (error) {
        console.log(error);
        return res.status(500).json(new ApiResponse(false, "Error deleting task", null))
    }
}

export const updateTaskStatus = async (req: Request, res: Response) => {
    try {
        const { status, id } = req.params
        if (status !== 'COMPLETED' && status !== 'STARTED') return res.status(400).json(new ApiResponse(false, "Invalid status", null))
        const task = await Task.findOne({ _id: id })
        if (!task) return res.status(400).json(new ApiResponse(false, "Task doesn't exist", null))
        task.status = status
        await task.save()
        return res.status(200).json(new ApiResponse(false, "Task updated", null))
    } catch (error) {
        console.log(error);
        return res.status(500).json(new ApiResponse(false, "Error updating task", null))
    }
}
