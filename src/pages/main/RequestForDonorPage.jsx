import React from 'react'
import MainLayout from '../../layout/MainLayout'
import HalfHero from '../../components/main/HalfHero'
import RequestForDonorContent from '../../components/contents/RequestForDonorContent'

const RequestForDonorPage = () => {
  return (
    <>
      <HalfHero title={'Request for Donor'} />
      <RequestForDonorContent />
    </>
  )
}

export default RequestForDonorPage