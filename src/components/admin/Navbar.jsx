import React, { useEffect, useState } from 'react'
import RCYLogo from '../../assets/img/red-cross-youth.png'
import ProfileImg from '../../assets/img/profile.png'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useStateContext } from '../../contexts/ContextProvider'
import axiosClient from '../../axios-client'

const Navbar = ({ user }) => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-red-500">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span className="sr-only">Open sidebar</span>
                  <FiMenu className='w-6 h-6 text-white hover:bg-transparent' />
              </button>
              <Link to='/' className="flex ms-2 md:me-24">
                <img src={RCYLogo} className="h-8 me-3" alt='RCY Logo' />
                <div className='flex flex-col'>
                <span className="font-semibold text-xs whitespace-nowrap text-white">City of San Pedro</span>
                <span className="self-center font-semibold text-md whitespace-nowrap text-white">Red Cross Youth</span>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              <div className="flex items-end ms-3 flex-col">
                <h1 className='text-md text-white'>{user.username ? user.username : 'Loading...'}</h1>
                
                <h1 className='text-xs text-white'>{user.role ? user.role : ''}</h1>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar