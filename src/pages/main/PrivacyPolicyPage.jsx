import React from 'react'
import Navbar from '../../components/main/Navbar'
import Footer from '../../components/main/Footer'
import ArrowTop from '../../components/main/ArrowTop'
import HalfHero from '../../components/main/HalfHero'
import PrivacyPolicyContent from '../../components/contents/PrivacyPolicyContent'

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <HalfHero title="Privacy Policy" />
      <PrivacyPolicyContent />
      <Footer />
      <ArrowTop />
    </>
  )
}

export default PrivacyPolicyPage