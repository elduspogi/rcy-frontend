import React from 'react'
import Navbar from '../components/main/Navbar'
import Footer from '../components/main/Footer'
import ArrowTop from '../components/main/ArrowTop'

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
      
      <Footer />

      {/* Keep this bottom */}
      <ArrowTop />
    </>
  )
}

export default MainLayout