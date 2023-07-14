import React from 'react'
import { github } from '../assets'

const Footer = () => {
  return (
    <footer>
          <a href="https://github.com/huseynovelmir" target="_blank" className='flex justify-center items-center py-3 text-white opacity-25 hover:opacity-100 duration-500 z-50'><img src={github} alt="" className='w-[30px] h-[30px] mx-2'/>Made by Huseynov Elmir</a>
    </footer>
  )
}

export default Footer