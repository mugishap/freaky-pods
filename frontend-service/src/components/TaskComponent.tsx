import React, { useContext, useState } from 'react'
import { ITask } from '../types'
import { Container } from '@chakra-ui/react'
import { BiCheck, BiEditAlt, BiLoaderAlt, BiTrash } from 'react-icons/bi'
import { CommonContext } from '../context'
import { useDeleteTask, useUpdateTaskStatus } from './../hooks'

const TaskComponent: React.FC<{ task: ITask }> = ({ task }) => {
    const { setPopup, setActiveTask, dispatch } = useContext(CommonContext)
    const [loading, setLoading] = useState(false)
    return (
        <Container className='border-2 w-full flex items-start justify-between rounded my-3 px-4 py-2'>
            <div className='flex-col w-11/12'>
                <span className='flex items-center justify-between w-full'>
                    <span className=' font-bold text-xl'>{task.name}</span>
                    <span className=''>{task.status}</span>
                </span>
                <span className='italic '>{task.description}</span>
            </div>
            <div>
                {loading ? <BiLoaderAlt size={25} className="cursor-not-allowed hover:animate-ring text-red-600 my-3" /> : <BiCheck onClick={() => { useUpdateTaskStatus({ dispatch, setLoading, id: task._id as string, status: "COMPLETED" }) }} className="cursor-pointer hover:animate-ring text-blue-600 my-3" size={25} />}
                {loading ? <BiLoaderAlt size={25} className="cursor-not-allowed hover:animate-ring text-red-600 my-3" /> : <BiEditAlt onClick={() => { setActiveTask(task); setPopup({ display: true, active: "update" }) }} className="cursor-pointer hover:animate-ring text-blue-600 my-3" size={25} />}
                {loading ? <BiLoaderAlt size={25} className="cursor-not-allowed hover:animate-ring text-red-600 my-3" /> : <BiTrash onClick={() => useDeleteTask({ dispatch, setLoading, id: task._id as string })} className="cursor-pointer hover:animate-ring text-red-600 my-3" size={25} />}

            </div>
        </Container>
    )
}

export default TaskComponent