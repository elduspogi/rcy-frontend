import React from 'react'
import RegisterContent from '../../components/contents/RegisterContent'
import HalfHero from '../../components/main/HalfHero'
import { useLocation } from 'react-router-dom'
import MainLayout from '../../layout/MainLayout'

const RegisterPage = () => {
  const location = useLocation();
  
  return (
    <>
      <HalfHero title={`Be a ${location.pathname === '/register/member' ? 'Member' : 'Volunteer'}!`} />
      <RegisterContent type={location.pathname === '/register/member' ? 'Member' : 'Volunteer'} />
    </>
  )
}

export default RegisterPage