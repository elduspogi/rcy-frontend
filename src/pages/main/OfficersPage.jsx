import React from 'react'
import Navbar from '../../components/main/Navbar'
import HalfHero from '../../components/main/HalfHero'
import Footer from '../../components/main/Footer'
import ArrowTop from '../../components/main/ArrowTop'
import OfficersContent from '../../components/contents/OfficersContent'

const OfficersPage = () => {
  return (
    <>
      <Navbar />

      <HalfHero title="Officers" />
      <OfficersContent />
      
      <Footer />
      <ArrowTop />
    </>
  )
}

export default OfficersPage