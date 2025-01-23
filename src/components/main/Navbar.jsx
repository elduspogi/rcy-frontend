import React, { useContext, useEffect, useState } from 'react'
import { CiLight, CiDark } from 'react-icons/ci'
import { ThemeContext } from '../../hooks/Theme'
import Logo from '../../assets/img/red-cross-youth.png'
import { FiMenu } from 'react-icons/fi'
import { goToTop, isScrolled } from '../../hooks/Scroll'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isBackground = isScrolled(25);
  const handleGoToTop = () => goToTop();

  return (
    <div className={`navbar p-0 lg:px-4 fixed bg-transparent z-50 transition-all duration-300 ease-in-out ${
      isBackground ? 'bg-white dark:bg-slate-800' : 'bg-transparent'
    }`} id='navbar'>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FiMenu className='h-5 w-5' />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to='/' >Home</Link></li>
            <li><a href='/#about'>About</a></li>
            <li>
              <a>Join Us</a>
              <ul className="p-2">
                <li><a href='/#join-us'>Be a Volunteer</a></li>
                <li><a href='/#join-us'>Be a Member</a></li>
                <li><a href='/#partner'>Be a Partner</a></li>
              </ul>
            </li>
            <li onClick={() => toggleTheme()}><a>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</a></li>
          </ul>
        </div>
        <img src={Logo} alt="Red Cross Youth Logo" className='object-cover size-8 mr-2 logo' />
        <a className="text-xl font-semibold hidden lg:flex title" href='/'>Red Cross Youth</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/' >Home</Link></li>
          <li><a href='/#about'>About</a></li>
          <li>
            <details>
              <summary>Join Us</summary>
              <ul className="p-2">
                <li><a href='/#join-us'>Volunteer</a></li>
                <li><a href='/#join-us'>Member</a></li>
                <li><a href='/#partner'>Partner</a></li>
              </ul>
            </details>
          </li>
          <li><a href='/#faqs'>FAQs</a></li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="text-2xl rounded-full p-2 bg-slate-200 dark:bg-gray-700 hover:cursor-pointer hover:bg-slate-300 hover:dark:bg-slate-300 hover:dark:text-gray-800" onClick={() => toggleTheme()}>
          {theme === 'light' ? <CiDark /> : <CiLight />}
        </div>
      </div>
    </div>
  )
}

export default Navbar