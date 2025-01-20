import React from 'react'
import SmallHeader from './SmallHeader'
import { RiShakeHandsFill } from 'react-icons/ri'
import { FaHandsHelping } from 'react-icons/fa'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { FaArrowRightLong } from 'react-icons/fa6'

const Volunteer = () => {
  const cards = [
    {
      id: 1,
      title: "Member",
      desc: "lorem lorem lorem",
      icon: <MdOutlinePeopleAlt className="text-8xl bg-[#00aaff7a] dark:bg-[#00679b] text-[#00679b] dark:text-[#1d232a] p-4 rounded-md" />,
      link: "/"
    },
    {
      id: 2,
      title: "Volunteer",
      desc: "lorem lorem lorem",
      icon: <FaHandsHelping className="text-8xl bg-[#00aaff7a] dark:bg-[#00679b] text-[#00679b] dark:text-[#1d232a] p-4 rounded-md" />,
      link: "/"
    },
    {
      id: 3,
      title: "Partner",
      desc: "lorem lorem lorem",
      icon: <RiShakeHandsFill className="text-8xl bg-[#00aaff7a] dark:bg-[#00679b] text-[#00679b] dark:text-[#1d232a] p-4 rounded-md" />,
      link: "/"
    },
  ]

  return (
    <div id='join-us'>
      <div className='mx-2 lg:mx-40 component'>
        <SmallHeader title="JOIN US" desc="Be a volunteer at " rcy="Red Cross Youth" />

        <div className="flex flex-col md:flex-row gap-4 lg:gap-12">
          {cards.map((card) => (
            <div className="card bg-base-100 w-full rounded-md volunteer-card hover:md:scale-105 hover:md:rotate-3" key={card.id}>
              <figure className="px-10 pt-10">
                {card.icon}
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">{card.title}</h2>
                <p>{card.desc}</p>
                <div className="card-actions">
                  <a href="/">
                    <button className='flex flex-row items-center px-4 py-2 rounded-lg text-sm gap-2 bg-[#00aaff] hover:bg-[#00679b] dark:bg-[#00679b] hover:dark:bg-[#00aaff] text-white'>Register <FaArrowRightLong /></button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Volunteer