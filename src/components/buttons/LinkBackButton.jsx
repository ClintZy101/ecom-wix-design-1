import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function LinkBackButton({text, endpoint}) {
  return (
    <Link to={`${endpoint}`}>
    <div className="flex space-x-2 items-center text-right justify-end mb-4 border border-gray-700 p-2 px-5 rounded-xl hover:bg-white hover:text-black duration-500 w-max place-self-end">
      <FaArrowLeft />
      <h2>{text}</h2>
    </div>
    </Link>
  )
}
