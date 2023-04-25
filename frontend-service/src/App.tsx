import { Spinner } from '@chakra-ui/react'
import React from 'react'
import './App.css'
import Pages from './Pages'

function App() {

  return (
    <React.Suspense
      fallback={
        <div className='w-full bg-slate-200 h-screen flex justify-center items-center font-lato'>
          <div className='flex flex-col items-center justify-center'>
            <Spinner
              thickness='5px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />
            <span className='font-bold text-2xl mt-4'>Loading...</span>
          </div>
        </div>
      }
    >
      <Pages />
    </React.Suspense>
  )
}

export default App
