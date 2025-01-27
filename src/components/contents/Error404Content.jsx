import React from 'react'

const Error404Content = () => {
  return (
    <div className="hero h-[50vh] 2xl:h-[75vh] min-w-screen pt-16 pb-12">
      {/* Main Hero Content */}
      <div className="hero-content text-center">
        <div className="md:max-w-xl lg:max-w-3xl">
          <h1 className="text-3xl md:text-8xl py-1 font-bold title">Error 404</h1>
          <h1 className="text-3xl md:text-6xl py-1 font-bold title">Page Not Found</h1>
        </div>
      </div>
    </div>
  )
}

export default Error404Content