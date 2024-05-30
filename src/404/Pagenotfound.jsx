import React from 'react'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <div className='h-screen flex items-center justify-center flex-col gap-7'>
      <h1 className='text-9xl font-bold text-green-500'>PAGE NOT FOUND</h1>
      <Link to='/' className='px-6 py-4 rounded-full bg-green-400 text-white font-semibold text-lg'>Homepage</Link>
    </div>
    
  )
}

export default Pagenotfound