import React from 'react'
import SmallHeader from './SmallHeader'
import { FaHandsHelping } from 'react-icons/fa'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { FaArrowRightLong } from 'react-icons/fa6'

const Volunteer = () => {
  const cards = [
    {
      id: 1,
      title: "Member",
      desc: "lorem lorem lorem",
      icon: <MdOutlinePeopleAlt className="text-8xl bg-[#00aaff7a] dark:bg-[#00aaff] text-[#00679b] dark:text-[#1d232a] p-4 rounded-md icon" />,
      link: "/"
    },
    {
      id: 2,
      title: "Volunteer",
      desc: "lorem lorem lorem",
      icon: <FaHandsHelping className="text-8xl bg-[#00aaff7a] dark:bg-[#00aaff] text-[#00679b] dark:text-[#1d232a] p-4 rounded-md icon" />,
      link: "/"
    },
    // {
    //   id: 3,
    //   title: "Partner",
    //   desc: "lorem lorem lorem",
    //   icon: <FaHandsHelping className="text-8xl bg-[#00aaff7a] dark:bg-[#00aaff] text-[#00679b] dark:text-[#1d232a] p-4 rounded-md icon" />,
    //   link: "/"
    // },
  ]

  return (
    <div id='join-us'>
      <div className='mx-2 lg:mx-40 py-16'>
        <SmallHeader title="JOIN US" desc="Be a volunteer at " rcy="Red Cross Youth" />

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-12 xl:px-24">
          {cards.map((card) => (
            <a href={card.link} key={card.id} className="card w-full rounded-md volunteer-card group group-hover:bg-[#00aaff]">
              <figure className="px-10 pt-10">
                {card.icon}
              </figure>
              <div className="card-body items-center text-center card-texts">
                <h2 className="card-title text-2xl lg:text-3xl">{card.title}</h2>
                <p>{card.desc}</p>
                <div className="card-actions">
                  <p className='flex flex-row items-center gap-1 font-semibold pt-2'>Register <FaArrowRightLong className='arrow-right' /></p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Volunteer