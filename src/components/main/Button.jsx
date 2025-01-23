import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, icon, link }) => {
  return (
    <div className="flex max-w-sm w-full justify-center rounded-xl bg-gradient-to-r from-[#fe006e] to-[#0095ff9f] p-0.5 shadow-lg hero-button">
      <Link to={link}>
        <button className="group flex flex-row gap-2 items-center font-semibold text-sm bg-transparent text-white dark:text-gray-200 px-3 lg:px-6 py-3 rounded-xl">
          {text} 
          <span className='group-hover:translate-x-1 transition-all duration-200 ease-in-out'>
            {icon}
          </span>
        </button>
      </Link>
    </div>
  )
}

export const HeroButton = ({ text, icon, link }) => {
  return (
    <div className="flex max-w-sm rounded-xl bg-gradient-to-r from-[#fe006e] to-[#0095ff9f] p-0.5 mx-2 shadow-lg hero-button">
      <a href={link}>
        <button className="group flex flex-row gap-2 items-center font-semibold text-sm bg-transparent text-white dark:text-gray-200 px-3 lg:px-6 py-3 rounded-xl">
          {text} 
          <span className='group-hover:translate-x-1 transition-all duration-200 ease-in-out'>
            {icon}
          </span>
        </button>
      </a>
    </div>
  )
}

export default Button