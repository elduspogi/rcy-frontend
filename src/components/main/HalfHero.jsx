import React from 'react'

const HalfHero = ({ title }) => {
  return (
    <div className="hero h-40 md:h-60 min-w-screen pt-16 pb-12">
      {/* Main Hero Content */}
      <div className="hero-content text-center">
        <div className="md:max-w-xl lg:max-w-3xl">
          <h1 className="text-3xl md:text-6xl py-1 font-bold title">{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default HalfHero