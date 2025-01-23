import React from 'react'
import Navbar from '../../components/main/Navbar'
import HalfHero from '../../components/main/HalfHero'
import Footer from '../../components/main/Footer'

const PartnerRegister = () => {
  return (
    <>
    <Navbar />
    <HalfHero title="Partner with us" />
      {/* <RegisterContent type={location.pathname === '/register/member' ? 'Member' : 'Volunteer'} /> */}
    <Footer />
    </>
  )
}

export default PartnerRegister