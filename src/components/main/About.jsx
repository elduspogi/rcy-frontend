import React, { useState } from 'react'
import aboutImg from '../../assets/img/about-img.jpg'
import SmallHeader from './SmallHeader'

const About = () => {
  const [ activeTab, setActiveTab ] = useState("tab1");

  const tabs = [
    {id: "tab1", label:"About"},
    {id: "tab2", label:"Mission"},
    {id: "tab3", label:"Services"},
  ];

  const tabContent = {
    tab1: (
      <div>
        <h2 className='mb-3 text-2xl font-bold border-l-4 border-[#00aaff] pl-4'>Who are we</h2>
        <p className='mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa distinctio sit non vitae necessitatibus, totam odio fugiat saepe quia magnam! Reiciendis quam excepturi quod voluptatem rerum veritatis molestias facere!</p>
        <p className='mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa distinctio sit non vitae necessitatibus, totam odio fugiat saepe quia magnam! Reiciendis quam excepturi quod voluptatem rerum veritatis molestias facere!</p>
      </div>
    ),
    tab2: (
      <div>
        <h2 className='mb-3 text-2xl font-bold border-l-4 border-[#00aaff] pl-4'>Our Mission</h2>
        <p className='mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa distinctio sit non vitae necessitatibus, totam odio fugiat saepe quia magnam! Reiciendis quam excepturi quod voluptatem rerum veritatis molestias facere!</p>
      </div>
    ),
    tab3: (
      <div>
        <h2 className='mb-3 text-2xl font-bold border-l-4 border-[#00aaff] pl-4'>What we do</h2>
        <p className='mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa distinctio sit non vitae necessitatibus, totam odio fugiat saepe quia magnam! Reiciendis quam excepturi quod voluptatem rerum veritatis molestias facere!</p>
      </div>
    ),
  }

  return (
    <div id='about'>
      <div className='mx-2 lg:mx-40 component'>
        <SmallHeader title="ABOUT" desc="Learn more about" rcy="Red Cross Youth" />

        <div className='flex flex-col md:flex-row-reverse gap-4 xl:px-24'>
          <div className='md:w-2/5'>
            <img 
              src={aboutImg} 
              alt="Red Cross About Image" 
              className="w-full rounded-lg object-contain md:rotate-3 shadow-lg" 
            />
          </div>

          <div className='w-full md:w-3/5 bg-transparent space-y-5'>
              <div className="flex flex-wrap border-b border-[#acacac6f]">
                {tabs.map((tab) => (
                  <button 
                    key={tab.id} 
                    className={`px-4 py-2 font-semibold
                    ${activeTab === tab.id ? "border-b-2 border-[#00aaff] text-[#00aaff]" : "text-[#00679b] hover:text-[#00aaff7a]"}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div>{tabContent[activeTab]}</div>
            </div>
        </div>
      
      </div>
    </div>
  )
}

export default About