import React from 'react'
import SmallHeader from './SmallHeader'
import { FaArrowRightLong } from 'react-icons/fa6'
import Button from './Button'

const Officers = () => {
  return (
    <div className="py-10 px-2 flex flex-col items-center bg-[#ff8fc12d] dark:bg-[#ff70b020]">
      <SmallHeader title="OFFICERS" desc="Meet the officers of " rcy="Red Cross Youth" />

      <Button text="Meet the officers" icon={<FaArrowRightLong />} link="/officers" />
    </div>
  )
}

export default Officers