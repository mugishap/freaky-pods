import React, { FormEvent, useContext, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { CommonContext } from '../context';
import { useUpdateTask } from '../hooks';
import { ITask } from '../types';

const UpdateTask: React.FC = () => {
    const { activeTask, dispatch, setPopup } = useContext(CommonContext)
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        useUpdateTask({ dispatch, setLoading, taskData, setPopup })
    }
    
    const [taskData, setTaskData] = React.useState<ITask>({
        name: activeTask.name,
        description: activeTask.description
    })

    return (
        <div className="flex w-full flex-col">
            <form className="flex w-full flex-col" onSubmit={handleSubmit}>

                <div className="my-1">
                    <label className="text-sm font-medium leading-none text-gray-800">
                        Name
                    </label>
                    <input
                        aria-label="enter name"
                        role="input"
                        type="text"
                        className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                        placeholder="Task Name"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setTaskData({ ...taskData, name: e.target.value });
                        }}
                        value={taskData.name}
                    />
                </div>

                <div className='w-full my-2'>
                    <label className="text-sm font-medium leading-none text-gray-800">
                        Task Description
                    </label>
                    <textarea
                        rows={8}
                        value={taskData.description}
                        onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
                        className="resize-none bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    />
                </div>

                <div className="mt-8">
                    <button
                        role="button"
                        aria-label="create my account"
                        className="focus:ring-2 flex items-center justify-center focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-pink-500 border rounded hover:bg-pink-600 duration-1000 hover:animate-ring py-4 w-full disabled:bg-slate-600"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? <BiLoaderAlt className="animate-spin" size={25} /> : "CREATE"}
                    </button>
                </div>
            </form >
        </div>
    )
}

export default UpdateTask