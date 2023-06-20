import React from 'react'
import '../styles/Loader.css'

const Loader = () => {


  return (
    <div className='w-screen h-screen bg-gray-200 bg-opacity-5'>
      <div className='loader absolute top-[45%]'></div>
    </div>
  )
}

export default Loader