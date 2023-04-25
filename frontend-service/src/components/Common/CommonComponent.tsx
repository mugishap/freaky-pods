import React, { useContext } from 'react'
import { CommonContext } from '../../context'
import PopupComponent from '../PopupComponent'

interface Props {
    children?: React.ReactNode
}

const CommonComponent: React.FC<Props> = ({ children }) => {
    const { popup } = useContext(CommonContext)
    return (
        <div className='w-full flex h-screen'>
            {popup.display && <PopupComponent />}
            {children}
        </div>
    )
}

export default CommonComponent