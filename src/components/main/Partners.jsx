import React from 'react'
import SmallHeader from './SmallHeader'
import RCYLogo from '../../assets/img/red-cross-youth.png'
import SPCLogo from '../../assets/img/san-pedro.png'
import Button from './Button'
import { FaArrowRightLong } from 'react-icons/fa6'

const Partners = () => {
  const logos = [
    { src: RCYLogo },
    { src: SPCLogo },
    { src: RCYLogo },
    { src: SPCLogo },
    { src: RCYLogo },
    { src: SPCLogo },
    { src: RCYLogo },
    { src: SPCLogo },
    { src: RCYLogo },
    { src: SPCLogo },
    { src: RCYLogo },
    { src: SPCLogo },
    { src: RCYLogo },
    { src: SPCLogo },
    { src: RCYLogo },
    { src: SPCLogo },
    { src: RCYLogo },
    { src: SPCLogo },
    { src: RCYLogo },
    { src: SPCLogo },
    { src: RCYLogo },
    { src: SPCLogo },
    { src: RCYLogo },
    { src: SPCLogo },
  ];

  return (
    <>
    <div className="mx-2 lg:mx-40 component flex flex-col" id='partner'>
      <SmallHeader title="WE ARE" desc="In partnership with" />

      <div className="logos overflow-hidden py-[30px] flex flex-row">
        <div className="logos-slide whitespace-nowrap flex flex-row">
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt="logo" className='h-[150px] mx-[30px]' />
          ))}

          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt="logo" className='h-[150px] mx-[30px]' />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button text="Sign up as a partner" link="/register/partner" icon={<FaArrowRightLong />} /> 
      </div>
    </div>
    </>
    
  )
}

export default Partners