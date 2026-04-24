import React from 'react'

const NavBar = () => {
  return (
    <div>
      <div className='h-100 w-full bg-blue-200 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl'>
        <h1>AlgoLeague</h1>

        <a href="home" className='ml-4 px-4 py-2 bg-white text-blue-500 font-bold rounded-lg hover:bg-gray-200 transition duration-300'>
          Home
        </a>

        <a href="about" className='ml-4 px-4 py-2 bg-white text-blue-500 font-bold rounded-lg hover:bg-gray-200 transition duration-300'>
          About
        </a>

      </div>
    </div>
  )
}

export default NavBar
