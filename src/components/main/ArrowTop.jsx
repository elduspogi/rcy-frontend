import React from 'react'
import { goToTop, isScrolled } from '../../hooks/Scroll'
import { FaArrowUp } from 'react-icons/fa6'

const ArrowTop = () => {
  const isVisible = isScrolled(50);
  const handleGoToTop = () => goToTop();

  return (
    <button
      onClick={handleGoToTop}
      className={`fixed bottom-3 right-3 p-3 bg-[#fe006e] hover:bg-[#fe006e7a] text-white rounded-full shadow-xl transition-all ease-in-out duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transition: 'opacity 0.3s ease' }}
      aria-label="Go to Top"
    >
    <FaArrowUp />
  </button>
  )
}

export default ArrowTop