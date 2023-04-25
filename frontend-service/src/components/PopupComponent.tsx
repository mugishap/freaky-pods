import { useContext } from 'react'
import { CommonContext } from '../context'
import CreateTask from './CreateTask'
import UpdateTask from './UpdateTask'

const PopupComponent = () => {

    const { popup, setPopup } = useContext(CommonContext)

    return (
        <div className='z-[2] w-full h-screen fixed top-0 left-0 bg-black/20 backdrop-blur-lg flex items-center justify-center'>
            <div className='absolute z-[3] w-full h-full flex items-center justify-center' onClick={() => setPopup({ display: false, active: "creat" })}></div>
            <div className='z-[5] bg-white w-11/12 mmsm:w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12  p-6 h-fit py-8 rounded flex flex-col justify-between'>
                {popup.active === "update" && (<UpdateTask />)}
                {popup.active === "create" && (<CreateTask />)}
            </div>
        </div>
    )
}

export default PopupComponent