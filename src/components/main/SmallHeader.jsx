import React from 'react'

const SmallHeader = ({ title, desc, rcy }) => {
  return (
    <>
      <div className="small-header mb-6">
        <h1 className="text-center font-bold text-xs lg:text-sm">{title}</h1>
        <h1 className="text-center font-bold text-xl lg:text-3xl">{desc} <span className='title'>{rcy}</span></h1>
      </div>
    </>
  )
}

export default SmallHeader