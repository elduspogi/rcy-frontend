import React from 'react'
import HalfHero from '../main/HalfHero';
import PresidentImg from '../../assets/img/officers/eca.png'
import VPresidentImg from '../../assets/img/officers/gwyn.png'
import SecretaryGeneral from '../../assets/img/officers/keneth.png'
import SecretaryDeputy from '../../assets/img/officers/princess.png'
import Treasurer from '../../assets/img/officers/lei.png'
import Auditor from '../../assets/img/officers/micay.png'
import CPS from '../../assets/img/officers/lili.png'
import CPSDeputy from '../../assets/img/officers/sunshine.png'
import CVRW from '../../assets/img/officers/angel.png'
import CVRWDeputy from '../../assets/img/officers/serge.png'
import CIP from '../../assets/img/officers/monica.png'
import CIPDeputy from '../../assets/img/officers/riel.png'
import CECA from '../../assets/img/officers/ren.png'
import CECADeputy from '../../assets/img/officers/kiko.png'
import UVR1 from '../../assets/img/officers/elle.png'
import UVR2 from '../../assets/img/officers/erich.png'
import UVR3 from '../../assets/img/officers/kate.png'
import LVR1 from '../../assets/img/officers/jc.png'
import LVR2 from '../../assets/img/officers/maiden.png'
import LVR3 from '../../assets/img/officers/easean.png'

const OfficersContent = () => {
  const rcyOfficers = [
    { src: PresidentImg, position: "President", name: "Ericamila Ramos"},
    { src: VPresidentImg, position: "Vice President", name: "Gwyneth Lacbain"},
    { src: SecretaryGeneral, position: "Secretary General", name: "Keneth Baligod"},
    { src: SecretaryDeputy, position: "Secretary Deputy", name: "Princess Pauner"},
    { src: Treasurer, position: "Treasurer", name: "Bernalei Honrado"},
    { src: Auditor, position: "Auditor", name: "Micayla Nacario"},
    { src: CPS, position: "Chairperson of the Committee on Program and Services", name: "Lilibeth Almencion"},
    { src: CPSDeputy, position: "Deputy of the Committee on Program and Services", name: "Sunshine Bravo"},
    { src: CVRW, position: "Chairperson of the Committee on Volunteer Rights and Welfare", name: "Angel May Simeon"},
    { src: CVRWDeputy, position: "Deputy of the Committee on Volunteer Rights and Welfare", name: "Serge Tapang"},
    { src: CIP, position: "Chairperson of the Committee on Public Information and Promotion", name: "Monica Aguirre"},
    { src: CIPDeputy, position: "Deputy of the Committee on Public Information and Promotion", name: "Riel Gumapac"},
    { src: CECA, position: "Chairperson of the Committee on External and Community Affairs", name: "Renren Esteban"},
    { src: CECADeputy, position: "Deputy of the Committee on External and Community Affairs", name: "Kiko Garcia"},
    { src: UVR1, position: "Upper Village Representative", name: "Elle Sotero"},
    { src: UVR2, position: "Upper Village Representative", name: "Erich Empleo"},
    { src: UVR3, position: "Upper Village Representative", name: "Katelyn Arguelles"},
    { src: LVR1, position: "Lower Village Representative", name: "John Christopher Anglon"},
    { src: LVR2, position: "Lower Village Representative", name: "Maiden Berroya"},
    { src: LVR3, position: "Lower Village Representative", name: "Easean Curay"}
  ];

  const officers = rcyOfficers.slice(0, 14);
  const representatives = rcyOfficers.slice(14, rcyOfficers.length);

  return (
    <div className='mx-2 lg:mx-40 component'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        {officers.map((officer, index) => (
          <div className='flex flex-col xl:flex-row items-center md:p-5 gap-4' key={index}>
            <img src={officer.src} alt={`${officer.position} Image`} className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border-4 border-[#00aaff] dark:border-[#fe006e] rounded-full' />

            <div className='text-center xl:text-left'>
              <h1 className='font-bold text-2xl xl:text-3xl title'>{officer.name}</h1>
              <h1 className='font-semibold text-md'>{officer.position}</h1>
            </div>
          </div>        
        ))}
      </div>
      
      <HalfHero title="Representatives" />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 component'>
        {representatives.map((representative, index) => (
          <div className='flex flex-col xl:flex-row items-center md:p-5 gap-4' key={index}>
            <img src={representative.src} alt={`${representative.position} Image`} className='w-[150px] lg:h-[150px] border-4 border-[#00aaff] dark:border-[#fe006e] rounded-full object-cover' />

            <div className='text-center xl:text-left'>
            <h1 className='font-bold text-2xl xl:text-xl title'>{representative.name}</h1>
            <h1 className='font-semibold text-sm'>{representative.position}</h1>
            </div>
          </div>        
        ))}
      </div>
    </div>
  )
}

export default OfficersContent