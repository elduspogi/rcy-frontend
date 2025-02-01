import React from 'react'
import Navbar from '../components/main/Navbar'
import Footer from '../components/main/Footer'
import ArrowTop from '../components/main/ArrowTop'
import { useStateContext } from '../contexts/ContextProvider'
import ScrollToTop from '../hooks/ScrollToTop'
import { Navigate, Outlet } from 'react-router-dom'

const MainLayout = () => {
  const { user, token } = useStateContext();

  if(token) {
    return <Navigate to='/admin' />
  } 

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Outlet />
      
      <Footer />

      <ArrowTop />
    </>
  )
}

export default MainLayout