import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { InputHeader, InputLabel, MaabTable } from './Input';

const MemberVolunteerRadios = ({ register, setValue }) => {
    const location = useLocation();
    const type = location.pathname === '/register/member' ? 'radio-3' : 'radio-4';
    const [ joinSelected, setJoinSelected ] = useState(type);
  
    useEffect(() => {
      setJoinSelected(type);
      const memberType = type === 'radio-3' ? 'Member' : 'Volunteer';
      setValue('joined_as', memberType);
    }, [type]);
  
    const handleJoinTypeSelected = (e) => {
      setJoinSelected(e.target.name);
      const memberType = type === 'radio-3' ? 'Member' : 'Volunteer';
      setValue('joined_as', memberType);
    }
  
    return (
      <>
        <div className="flex flex-col gap-2 py-5 mb-4">
          <div className="flex content-center gap-2">
            <input  
              type="radio" 
              name="radio-3" 
              className="radio" 
              onChange={handleJoinTypeSelected} checked={joinSelected === "radio-3"} 
            />
            <p className='text-sm'>Member</p>
          </div>
  
          <div className="flex content-center gap-2">
            <input 
              type="radio" 
              name="radio-4" 
              className="radio" 
              onChange={handleJoinTypeSelected} 
              checked={joinSelected === "radio-4"} 
            />
            <p className='text-sm'>Volunteer</p>
          </div>
  
          <div id="memberPayment" className={`${joinSelected === "radio-3" ? "" : "hidden"}`}>
            <InputHeader title="Member Accidental Assistance Program (MAAB)" />
            <MaabTable />
  
            <div className="pt-5">
            <InputHeader title="Payment Details" />
              <div className='pt-5'>
                <h1>GCash Number: 09123456789</h1>
                <h1>John Smith</h1>
                <h1>Chairperson, Committee on Volunteers Rights and Welfare</h1>
                <h1>City of San Pedro Red Cross Youth Council</h1>
        
                <div className="grid grid-cols-2 md:grid-cols-2 py-5 gap-4">
                  <div className="form-control col-span-2 lg:col-span-1">
                    <InputLabel id='referenceNumber' text='Reference Number' isImportant={true} />
                    <input 
                      type="text" 
                      placeholder="Reference Number" 
                      className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
                      autoComplete='false'
                      id='referenceNumber'
                      {...register('reference_number')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

export default MemberVolunteerRadios