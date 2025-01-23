import React from 'react'
import Register from '../../components/contents/RegisterContent'
import RegisterContent from '../../components/contents/RegisterContent'
import Navbar from '../../components/main/Navbar'
import HalfHero from '../../components/main/HalfHero'
import Footer from '../../components/main/Footer'
import { useLocation } from 'react-router-dom'

const RegisterPage = () => {
  const location = useLocation();
  
  return (
    <>
      <Navbar />
      <HalfHero title="Join us" />
      <RegisterContent type={location.pathname === '/register/member' ? 'Member' : 'Volunteer'} />
      <Footer />
    </>
  )
}

export default RegisterPage