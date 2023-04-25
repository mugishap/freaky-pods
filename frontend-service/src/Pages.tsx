
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CommonContext } from './context'
import Home from './pages/Home/Home'
import { ITask } from './types'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Pages = () => {
    const taskSlice = useSelector((state: any) => state.taskSlice)
    const tasks: ITask[] = taskSlice.tasks
    const dispatch = useDispatch()
    const [popup, setPopup] = useState<{ display: boolean, active: "create" | "update" }>({ display: false, active: "create" })
    const [activeTask, setActiveTask] = useState<ITask | null>(null)

    return (
        <CommonContext.Provider
            value={{
                tasks,
                dispatch,
                popup,
                setPopup,
                activeTask,
                setActiveTask
            }}
        >
            <ToastContainer theme='colored' hideProgressBar={true} position='top-center' />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </CommonContext.Provider>
    )
}

export default Pages