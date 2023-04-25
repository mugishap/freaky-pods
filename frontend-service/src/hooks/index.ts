import { Dispatch } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../api";
import { addTask, deleteTaskRedux, setTasks, updateTask, updateTaskStatus } from "../redux/slices/taskSlice";
import { ITask } from "../types";


export const useCreateTask = async ({ dispatch, setLoading, taskData, setPopup }: { dispatch: Dispatch, setLoading: Function, setPopup: Function, taskData: ITask }) => {
    try {
        const request = await api.post("/create", { ...taskData })
        const response = request.data
        dispatch(addTask(response.data.task))
        toast.success(response.message)
        setPopup({ display: false, active: "create" })
    } catch (error: any) {
        toast.error(error.response.data.message)
    } finally {
        setLoading(false)
    }
}

export const useUpdateTask = async ({ dispatch, setLoading, taskData, setPopup }: { dispatch: Dispatch, setPopup: Function, setLoading: Function, taskData: ITask }) => {
    try {
        const request = await api.put("/update/" + taskData._id, { ...taskData })
        const response = request.data
        dispatch(updateTask({ id: taskData._id, data: response.data.task }))
        toast.success(response.message)
        setPopup({ display: false, active: "updat" })
    } catch (error: any) {
        toast.error(error.response.data.message)
    } finally {
        setLoading(false)
    }
}

export const useGetTasks = async ({ dispatch, setLoading }: { dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api.get("/")
        const response = request.data
        console.log(response.data.tasks)
        dispatch(setTasks(response.data.tasks))
    } catch (error: any) {
        toast.error(error.response.data.message)
    } finally {
        setLoading(false)
    }
}

export const useDeleteTask = async ({ dispatch, setLoading, id }: { dispatch: Dispatch, setLoading: Function, id: string }) => {
    try {
        setLoading(true)
        const request = await api.delete("/" + id)
        const response = request.data
        dispatch(deleteTaskRedux(id))
        toast.success(response.message)
    } catch (error: any) {
        toast.error(error.response.data.message)
    } finally {
        setLoading(false)
    }
}

export const useUpdateTaskStatus = async ({ dispatch, setLoading, id, status }: { dispatch: Dispatch, setLoading: Function, id: string, status: "COMPLETED" | "NOT_STARTED" | "STARTED" }) => {
    try {
        setLoading(true)
        const request = await api.patch("/update-status/" + id + status)
        const response = request.data
        dispatch(updateTaskStatus({ id, status }))
        toast.success(response.message)
    } catch (error: any) {
        toast.error(error.response.data.message)
    } finally {
        setLoading(false)
    }
}