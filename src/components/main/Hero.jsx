import React from 'react'
import RCYLogo from '../../assets/img/red-cross-youth.png'
import SPCLogo from '../../assets/img/san-pedro.png'
import Button, { HeroButton } from './Button'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

const Hero = () => {
  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const scrolltoHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    scrolltoHash();

    window.addEventListener('hashchange', scrolltoHash);

    return () => {
      window.removeEventListener('hashchange', scrolltoHash)
    }
  }, []);

  return (
    <div className="hero md:min-h-screen min-w-screen py-20 px-8 md:p-8">
      {/* HeroBackground */}
      <div className="hidden md:flex dark:opacity-5 absolute inset-0 z-1 h-full w-full black bg-[linear-gradient(to_right,#dbdbdb3c_1px,transparent_1px),linear-gradient(to_bottom,#dbdbdb3c_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      {/* Radial Dot */}
      {/* <div className="hidden dark:flex circlePosition w-[100px] lg:w-[1000px] h-[400px]  bg-[#fe006e] rounded-[100%] absolute z-1  top-[-50%] left-[0] translate-x-[-50%] translate-y-[50%] blur-[100px] lg:blur-[200px] "></div> */}

      {/* Main Hero Content */}
      <div className="hero-content text-center z-20">
        <div className="md:max-w-xl lg:max-w-3xl">
          <h1 className="text-xl md:text-2xl font-bold" data-aos="fade-up" data-aos-delay="0">City of San Pedro</h1>
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold mb-6 title" data-aos="fade-up" data-aos-delay="300">Red Cross Youth</h1>
          
          <div className="flex flex-row gap-4 md:gap-8 justify-center mb-6" data-aos="fade-up" data-aos-delay="600">
            <HeroButton text="Learn more" link="#about" icon={<FaArrowRightLong/>} />

            <div className="flex max-w-sm rounded-xl bg-[#fe006e] p-0.5 shadow-lg join-us-button">
              <a href="#join-us">
                <button className="font-semibold text-sm text-white px-3 lg:px-6 py-3 rounded-xl">Join Us</button>
              </a>
            </div>
          </div>

          <div className="flex flex-row gap-4 md:gap-8 py-5 justify-center">
            <img src={SPCLogo} alt="Red Cross Youth Logo" className='w-1/2 size-full lg:size-60 red-logo' data-aos="zoom-in" data-aos-delay="900" />
            <img src={RCYLogo} alt="Red Cross Youth Logo" className='w-1/2 size-full lg:size-60 blue-logo' data-aos="zoom-in" data-aos-delay="1200" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero