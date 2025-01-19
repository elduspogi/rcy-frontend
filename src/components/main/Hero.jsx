import React from 'react'
import RCYLogo from '../../assets/img/red-cross-youth.png'
import SPCLogo from '../../assets/img/san-pedro.png'
import Button from './Button'

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen min-w-screen p-8">
          {/* HeroBackground */}
          <div className="dark:opacity-5 absolute inset-0 z-1 h-full w-full black bg-[linear-gradient(to_right,#dbdbdb3c_1px,transparent_1px),linear-gradient(to_bottom,#dbdbdb3c_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

        {/* Radial Dot */}
        <div className="hidden dark:flex circlePosition w-[100px] lg:w-[1000px] h-[400px]  bg-[#084eff37] rounded-[100%] absolute z-1  top-[-50%] left-[0] translate-x-[-50%] translate-y-[50%] blur-[100px] lg:blur-[200px] "></div>

        {/* Main Hero Content */}
        <div className="hero-content text-center z-20">
          <div className="md:max-w-xl lg:max-w-3xl">
            <h1 className="text-xl md:text-2xl font-bold">City of San Pedro</h1>
            <h1 className="text-3xl lg:text-8xl md:text-6xl font-bold mb-6 title">Red Cross Youth</h1>
            
            <div className="flex flex-row gap-4 md:gap-8 justify-center mb-6">
              <Button text="Learn more" link="#about" />

              <div className="flex max-w-sm rounded-xl bg-gradient-to-r from-[#fe006e] to-[#0095ff9f] p-0.5 shadow-lg hero-button">
                  <button className="font-semibold text-sm bg-white dark:bg-gray-800 px-3 lg:px-6 py-3 rounded-xl">Join Us</button>
              </div>
            </div>

            <div className="flex flex-row gap-4 md:gap-8 justify-center">
              <img src={RCYLogo} alt="Red Cross Youth Logo" className='w-1/2 size-full lg:size-60 blue-logo' />
              <img src={SPCLogo} alt="Red Cross Youth Logo" className='w-1/2 size-full lg:size-60 red-logo' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero