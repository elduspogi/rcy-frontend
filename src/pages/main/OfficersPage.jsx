import React from 'react'
import HalfHero from '../../components/main/HalfHero'
import OfficersContent from '../../components/contents/OfficersContent'
import MainLayout from '../../layout/MainLayout'

const OfficersPage = () => {
  return (
    <>
      <MainLayout 
        children={
          <>
            <HalfHero title="Officers" />
            <OfficersContent />
          </>
        }
      />
    </>
  )
}

export default OfficersPage