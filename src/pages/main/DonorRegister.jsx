import React from 'react'
import HalfHero from '../../components/main/HalfHero'
import MainLayout from '../../layout/MainLayout'
import RegisterDonorContent from '../../components/contents/RegisterDonorContent'

const DonorRegister = () => {
  return (
    <>
      <HalfHero title="Be a donor" />
      <RegisterDonorContent />
    </>
  )
}

export default DonorRegister