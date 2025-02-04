import React from 'react'
import { InputLabel } from './Input'

const PersonalInformation = ({ register, fName, lName }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 py-3 gap-4">
      <div className="form-control md:col-span-2">
        <InputLabel id='firstName' text='First Name' isImportant={true} />
        <input 
          type="text" 
          placeholder="e.g. Juan" 
          className={`input input-bordered w-full rounded-md focus:outline-none border-solid text-sm ${fName ? 'border-2 border-red-500 focus:border-red-500' : 'focus:border-2 focus:border-[#fe006e]'}`} 
          autoComplete='false'
          id='firstName'
          {...register('first_name')}
        />
        {fName && <span className='text-sm text-red-500'>{fName}</span>}
      </div>

      <div className="form-control md:col-span-2">
        <InputLabel id='lastName' text='Last Name' isImportant={true} />
        <input 
          type="text" 
          placeholder="e.g. Dela Cruz" 
          className={`input input-bordered w-full rounded-md focus:outline-none border-solid text-sm ${lName ? 'border-2 border-red-500 focus:border-red-500' : 'focus:border-2 focus:border-[#fe006e]'}`} 
          autoComplete='false'
          id='lastName'
          {...register('last_name')}
        />
        {lName && <span className='text-sm text-red-500'>{lName}</span>}
      </div>

      <div className="form-control md:col-span-1">
        <InputLabel id='middleName' text='Middle Name' isImportant={false} />
        <input 
          type="text" 
          placeholder="e.g. Antonio" 
          className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm"
          autoComplete='false'
          id='middleName'
          {...register('middle_name')}
        />
      </div>
    </div>
  )
}

export default PersonalInformation