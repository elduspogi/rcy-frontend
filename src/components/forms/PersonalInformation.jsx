import React from 'react'
import { InputLabel } from './Input'

const PersonalInformation = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 py-3 gap-4">
      <div className="form-control md:col-span-2">
        <InputLabel id='firstName' text='First Name' isImportant={true} />
        <input 
          type="text" 
          placeholder="e.g. Juan" 
          className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
          name='first_name'
          autoComplete='false'
          id='firstName'
        />
      </div>

      <div className="form-control md:col-span-2">
        <InputLabel id='lastName' text='Last Name' isImportant={true} />
        <input 
          type="text" 
          placeholder="e.g. Dela Cruz" 
          className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
          name='last_name'
          autoComplete='false'
          id='lastName'
        />
      </div>

      <div className="form-control md:col-span-1">
        <InputLabel id='middleName' text='Middle Name' isImportant={false} />
        <input 
          type="text" 
          placeholder="e.g. Antonio" 
          className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
          name='middle_name'
          autoComplete='false'
          id='middleName'
        />
      </div>
    </div>
  )
}

export default PersonalInformation