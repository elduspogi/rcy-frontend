import React, { useContext, useEffect, useState } from 'react'
import { CiLight, CiDark } from 'react-icons/ci'
import { ThemeContext } from '../../hooks/Theme'
import Logo from '../../assets/img/red-cross-youth.png'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [ scrolled, setScrolled ] = useState(false);

  const handleScroll = () => {
    window.scrollY > 10 ? setScrolled(true) : setScrolled(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar p-0 lg:px-4 fixed bg-transparent z-50 transition-all duration-300 ease-in-out ${
      scrolled ? 'bg-white dark:bg-slate-800' : 'bg-transparent'
    }`} id='navbar'>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li><a>Events</a></li>
            <li><a>News</a></li>
            <li>
              <a>Join Us</a>
              <ul className="p-2">
                <li><a>Be a Volunteer</a></li>
                <li><a>Be a Member</a></li>
                <li><a>Be a Donor</a></li>
              </ul>
            </li>
            <li onClick={() => toggleTheme()}><a>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</a></li>
          </ul>
        </div>
        <img src={Logo} alt="Red Cross Youth Logo" className='object-cover size-8 mr-2 hidden lg:flex logo' />
        <a className="text-xl font-semibold hidden lg:flex title" href='/'>Red Cross Youth</a>
        <img src={Logo} alt="Red Cross Youth Logo" className='object-cover size-10 lg:hidden' />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a href='#about'>Events</a></li>
          <li><a>News</a></li>
          <li>
            <details>
              <summary>Join Us</summary>
              <ul className="p-2">
                <li><a>Volunteer</a></li>
                <li><a>Member</a></li>
                <li><a>Donor</a></li>
              </ul>
            </details>
          </li>
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