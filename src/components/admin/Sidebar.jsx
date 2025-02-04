import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { RiDashboard3Fill } from 'react-icons/ri'
import axiosClient from '../../axios-client';
import { FiLogOut } from 'react-icons/fi';
import { useStateContext } from '../../contexts/ContextProvider';

const Sidebar = () => {
  const iconStyle = 'w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-red-500';
  const listItems = [
    { link: '/admin', icon: <RiDashboard3Fill className={iconStyle} />, title: 'Dashboard' },
    { link: '/admin', icon: <RiDashboard3Fill className={iconStyle} />, title: 'Dashboard' },
  ];

  const { setUser, setToken } = useStateContext();

  const handleLogout = (event) => {
    event.preventDefault();

    axiosClient.post('/logout')
      .then(() => {
        setUser({});
        setToken(null);
      })
  }

  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full  border-r sm:translate-x-0 bg-red-500" aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {listItems.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.link} 
              className="flex items-center p-2 rounded-lg text-white font-normal hover:bg-gray-100 hover:text-red-500 group"
            >
              {item.icon}
              <span className="ms-3">{item.title}</span>
            </Link>
          </li>
          ))}

          <li>
            <Link 
              onClick={handleLogout}
              className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:text-red-500 group" 
            >
              <FiLogOut className='w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-red-500' />
              <span className="ms-3">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar