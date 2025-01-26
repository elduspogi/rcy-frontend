import React from 'react'
import HalfHero from '../../components/main/HalfHero'
import MainLayout from '../../layout/MainLayout'

const PartnerRegister = () => {
  return (
    <>
    <MainLayout 
      children={
        <>
          <HalfHero title="Partner with us" />
        </>
      }
    />
    </>
  )
}

export default PartnerRegister