import React from 'react'

const SmallHeader = ({ title, desc, rcy }) => {
  return (
    <div className="small-header mb-6">
      <h1 className="text-center font-bold text-xs text-[#00aaff] mb-2 lg:mb-4">{title}</h1>
      <h1 className="text-center font-bold text-4xl">{desc} <span className='title'>{rcy}</span></h1>
    </div>
  )
}

export default SmallHeader