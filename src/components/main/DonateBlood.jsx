import React from 'react'
import SmallHeader from './SmallHeader'
import DonateBloodImg from '../../assets/img/blood-donate.jpg'
import Button from '../../components/main/Button'
import { FaArrowRightLong } from 'react-icons/fa6'

const DonateBlood = () => {
  return (
    <div id='donate'>
      <div className="mx-2 lg:mx-40 component">
        <SmallHeader title="DONATE NOW" desc="Give blood with " rcy="Red Cross Youth" />

        <div className="card lg:card-side bg-base-100 shadow-2xl remove-border rounded-md">
          <figure className='lg:w-2/5 xl:w-4/5'>
            <img
              src={DonateBloodImg}
              alt="Donate Blood Image"
              className='object-cover h-full'
            />
          </figure>
          <div className="card-body  lg:w-3/5 p-2 md:px-5 lg:px-10 py-4 lg:py-10 justify-center">
            <div className="mb-6">
              <h2 className="card-title mb-3 text-xl lg:text-3xl title font-bold">The Red Connection</h2>
              <p className='border-l-4 border-[#fe006e] px-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam animi ab itaque perferendis nesciunt illum iusto obcaecati earum pariatur consectetur! Commodi modi beatae officiis repellendus possimus placeat doloremque non aut?.</p>
            </div>
            <div className="card-actions justify-center">
              <Button text="Sign up" link="/register/donor" icon={<FaArrowRightLong />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonateBlood