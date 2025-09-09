import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <header>
        <div className='flex gap-5'>
          <button className='bg-green-400 rounded-md p-3 px-5 shadow-red-500 shadow-md text-shadow-md text-shadow-white text-red-500'>
            <NavLink to={"/product"}>Product</NavLink>
          </button>
          <button className='bg-blue-500 rounded-md p-3 px-5 shadow-red-500 shadow-md text-shadow-md text-shadow-white text-red-500'>
            <NavLink to={"/user"}>User</NavLink>
          </button>

        </div>
      </header>
    </div>
  )
}

export default Home