import { Button, Select, Spinner } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import TaskComponent from '../../components/TaskComponent'
import { CommonContext } from '../../context'
import { ITask } from '../../types'
import CommonComponent from '../../components/Common/CommonComponent'
import { useGetTasks } from '../../hooks'

const Home: React.FC<{}> = () => {
  const { tasks, setPopup, dispatch } = useContext(CommonContext)
  const [_tasks, set_tasks] = useState<ITask[]>(tasks)
  const [filter, setFilter] = useState<"ALL" | "COMPLETED" | "STARTED" | "NOT_STARTED">('ALL')
  useEffect(() => {
    switch (filter) {
      case "ALL":
        set_tasks(tasks)
        break;
      case "COMPLETED":
        set_tasks(tasks.filter((task: ITask) => task.status === "COMPLETED"))
        break;
      case "STARTED":
        set_tasks(tasks.filter((task: ITask) => task.status === "STARTED"))
        break;
      case "NOT_STARTED":
        set_tasks(tasks.filter((task: ITask) => task.status === "NOT_STARTED"))
        break;
      default:
        break;
    }
    console.log(tasks);
  }, [filter])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    useGetTasks({ dispatch, setLoading })
  }, [])
  return (
    <CommonComponent>
      <div className='w-full h-full flex items-center justify-start flex-col pt-8'>
        <div className='sm:w-7/12 md:w-5/12 w-xl:w-3/12 flex flex-col items-center'>
          <span className='font-oregano text-7xl font-bold mb-4'>Task Manager</span>
          <div className='flex items-center my-2 justify-around w-full'>
            <Button onClick={() => setPopup({ display: true, active: "create" })} className='px-2 bg-slate-400'>CREATE TASK</Button>
            <Select onChange={(e) => setFilter(e.target.value as "ALL" | "COMPLETED" | "STARTED")} width={"25%"} className='w-1/3'>
              {
                ["ALL", "COMPLETED", "STARTED", "NOT_STARTED"].map((option, index) => <option key={index} value={option}>{option}</option>)
              }
            </Select>
          </div>
          {
            loading
              ?
              <Spinner
                thickness='5px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              />
              :
              <div className='flex flex-col w-full items-center justify-start'>
                {_tasks?.length && tasks.map((task: ITask, index: number) => <TaskComponent key={index} task={task} />)}
              </div>
          }
        </div>
      </div>
    </CommonComponent>
  )
}

export default Home