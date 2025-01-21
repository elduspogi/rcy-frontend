import React from 'react'
import RCYLogo from '../../assets/img/red-cross-youth.png'
import HalfHero from '../main/HalfHero';

const OfficersContent = () => {
  const rcyOfficers = [
    { src: RCYLogo, position: "President", name: "John Smith"},
    { src: RCYLogo, position: "Vice President", name: "John Smith"},
    { src: RCYLogo, position: "Secretary", name: "John Smith"},
    { src: RCYLogo, position: "Treasurer", name: "John Smith"},
    { src: RCYLogo, position: "Auditor", name: "John Smith"},
    { src: RCYLogo, position: "Upper Village Representative", name: "John Smith"},
    { src: RCYLogo, position: "Upper Village Representative", name: "John Smith"},
    { src: RCYLogo, position: "Upper Village Representative", name: "John Smith"},
    { src: RCYLogo, position: "Lower Village Representative", name: "John Smith"},
    { src: RCYLogo, position: "Lower Village Representative", name: "John Smith"},
    { src: RCYLogo, position: "Lower Village Representative", name: "John Smith"}
  ];

  const officers = rcyOfficers.slice(0, 5);
  const representatives = rcyOfficers.slice(5, rcyOfficers.length);

  return (
    <div className='mx-2 lg:mx-40 component'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        {officers.map((officer, index) => (
          <div className='flex flex-col xl:flex-row items-center md:p-5 gap-2' key={index}>
            <img src={officer.src} alt={`${officer.position} Image`} className='w-full h-full lg:w-[200px] lg:h-[200px] border-4 border-[#00aaff] dark:border-[#fe006e] rounded-full' />

            <div className='text-center xl:text-left'>
              <h1 className='font-bold text-2xl xl:text-4xl title'>{officer.name}</h1>
              <h1 className='font-semibold text-xl'>{officer.position}</h1>
            </div>
          </div>        
        ))}
      </div>
      
      <HalfHero title="Representatives" />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 component'>
        {representatives.map((representative, index) => (
          <div className='flex flex-col xl:flex-row items-center md:p-5 gap-2' key={index}>
            <img src={representative.src} alt={`${representative.position} Image`} className='w-full h-full lg:w-[150px] lg:h-[150px] border-4 border-[#00aaff] dark:border-[#fe006e] rounded-full object-cover' />

            <div className='text-center xl:text-left'>
            <h1 className='font-bold text-2xl xl:text-2xl title'>{representative.name}</h1>
            <h1 className='font-semibold text-md'>{representative.position}</h1>
            </div>
          </div>        
        ))}
      </div>
    </div>
  )
}

export default OfficersContent