import React from 'react'
import HalfHero from '../../components/main/HalfHero'
import PrivacyPolicyContent from '../../components/contents/PrivacyPolicyContent'
import MainLayout from '../../layout/MainLayout'

const PrivacyPolicyPage = () => {
  return (
    <>
      <MainLayout 
        children={
          <>
            <HalfHero title="Privacy Policy" />
            <PrivacyPolicyContent />
          </>
        }
      />
    </>
  )
}

export default PrivacyPolicyPage