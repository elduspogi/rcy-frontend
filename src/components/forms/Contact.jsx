import React from 'react'
import { ContactNumber, InputLabel } from './Input'

const Contact = ({ register }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-5 justify-center">
      <div className="form-control md:col-span-2">
        <label htmlFor='email' className='text-sm p-2 text-[#fe006e]'>Email Address *</label>
        <input 
          type="email" 
          placeholder="e.g. johnsmith@gmail.com" 
          className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
          autoComplete='false'
          id='email'
          {...register('email')}
        />
      </div>

      <div className="form-control md:col-span-2">
        <InputLabel id='contactNumber' text='Contact Number' isImportant={true} />
        <ContactNumber register={register} length={11} placeholder='e.g. 09123456789' />
      </div>

      <div className="form-control md:col-span-4">
        <label htmlFor='lastName' className='text-sm p-2 text-[#fe006e]'>Facebook Link *</label>
        <input 
          type="text" 
          placeholder="e.g. https://www.facebook.com/rcysanpedro" 
          className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
          autoComplete='false'
          {...register('facebook_link')}
        />
      </div>
    </div>
  )
}

export default Contact