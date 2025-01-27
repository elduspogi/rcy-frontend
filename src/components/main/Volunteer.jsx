import React from 'react'
import SmallHeader from './SmallHeader'
import { FaHandsHelping } from 'react-icons/fa'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Volunteer = () => {
  const cards = [
    {
      id: 1,
      title: "Member",
      desc: "Be a part of change with Red Cross Youth",
      icon: <MdOutlinePeopleAlt className="text-8xl bg-[#fe006e] text-white dark:text-[#1d232a] p-4 rounded-md icon" />,
      link: "/register/member"
    },
    {
      id: 2,
      title: "Volunteer",
      desc: "Be a reserve volunteer for Red Cross Youth",
      icon: <FaHandsHelping className="text-8xl bg-[#fe006e] text-white dark:text-[#1d232a] p-4 rounded-md icon" />,
      link: "/register/volunteer"
    }
  ]

  return (
    <div id='join-us'>
      <div className='mx-2 lg:mx-40 py-16'>
        <SmallHeader title="JOIN US" desc="Be a volunteer at " rcy="Red Cross Youth" />

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-12 xl:px-24">
          {cards.map((card) => (
            <Link to={card.link} key={card.id} className="card w-full rounded-md volunteer-card group group-hover:bg-[#00aaff]">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Volunteer