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
          <figure className='md:1/2 lg:w-2/5 xl:w-4/5'>
            <img
              src={DonateBloodImg}
              alt="Donate Blood Image"
              className='object-cover h-full'
            />
          </figure>
          <div className="card-body md:1/2 lg:w-3/5 p-2 md:px-5 lg:px-10 py-4 lg:py-10">
            <div className="border-l-4 border-[#00aaff] px-2 md:px-5 mb-6">
              <h2 className="card-title">Donate shits!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam animi ab itaque perferendis nesciunt illum iusto obcaecati earum pariatur consectetur! Commodi modi beatae officiis repellendus possimus placeat doloremque non aut?.</p>
            </div>
            <div className="card-actions justify-center">
              <Button className="w-full" text="Check for Donation Drives" link="/" icon={<FaArrowRightLong />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonateBlood