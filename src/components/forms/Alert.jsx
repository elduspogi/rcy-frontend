import React, { useEffect, useState } from 'react'

const Alert = ({ icon, bgColor, message }) => {

  return (
    <>
      <div role="alert" className={`alert ${bgColor} text-sm text-white mb-5`}>
        {icon}
        <span>{message}</span>
      </div>
    </>
  )
}

export default Alert