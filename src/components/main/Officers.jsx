import React from 'react'
import SmallHeader from './SmallHeader'
import { FaArrowRightLong } from 'react-icons/fa6'
import Button from './Button'

const Officers = () => {
  return (
    <>
      <div className="mx-2 lg:mx-40 component flex flex-col items-center">
        <SmallHeader title="OFFICERS" desc="Meet the officers of " rcy="Red Cross Youth" />

        <Button text="Meet the officers" icon={<FaArrowRightLong />} link="/officers" />
      </div>
    </>
  )
}

export default Officers