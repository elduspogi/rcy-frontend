import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import PersonalInformation from './PersonalInformation'

export const InputHeader = ({ title }) => {
  return (
    <h1 className='text-md lg:text-lg text-[#fe006e]'>{title}</h1>
  )
}

export const InputLabel = ({ id, text, isImportant }) => {
  return (
    <label htmlFor={id} className='text-sm p-2 text-[#fe006e]'>{text} {isImportant === true ? "*" : ""}</label>
  )
}

export const Select = ({ defaultValue, col, options, register, name }) => {
  return (
    <select
     defaultValue={defaultValue} 
     className={`select w-full md:col-span-${col} text-gray-400 text-md input-bordered focus:outline-none border-solid focus:border-2 focus:border-[#fe006e]`}
     {...register(name)}
    >
      { options }
    </select>
  )
};

export const Birthdate = ({ register }) => {
  return (
    <div className={`form-control md:col-span-2`}>
      <input 
        type="date" 
        placeholder="Birthdate" 
        className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-gray-400 text-sm" 
        autoComplete='false'
        id='birthdate'
        {...register('birthdate')}
      />
    </div>
  )
};

export const ContactNumber = ({ length, placeholder, register }) => {
  const [ phoneNumber, setPhoneNumber ] = useState("");

  const handlePhoneNumberChange = (event) => {
    const val = event.target.value.replace(/[^0-9]/g, "");

    val.length > length ? event.preventDefault() : setPhoneNumber(val);
  }

  return (
    <>
      <input 
        type="text" 
        placeholder={placeholder} 
        className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm"
        autoComplete='false'
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        id='contactNumber'
        {...register('contact_number')}
      />
    </>
 )
}

export const MaabTable = () => {
  const titles = ["Membership Program", "Accidental Death, Disablement and Dismemberment", "Unprovoked Murder and Assault", 
                "Accidental Medical Reimbursement", "Accidental Burial Assistance", "Daily Hospital Allowance(Max 60 days)"];
  const contents = [
    ["Classic(Ages 5-25 years old)", "12,000.00", "12,000,00", "5,000.00", "5,000.00", "150.00/Day"],
    ["Premier Bronze(Ages 5-65 years old)", "35,000.00", "35,000,00", "5,000.00", "5,000.00", "150.00/Day"],
    ["Premier Silver(Ages 5-65 years old)", "100,000.00", "100,000,00", "10,000.00", "5,000.00", "200.00/Day"],
    ["Premier Gold(Ages 5-65 years old)", "200,000.00", "200,000,00", "10,000.00", "5,000.00", "200.00/Day"],
    ["Premier Platinum(Ages 5-65 years old)", "300,000.00", "300,000,00", "10,000.00", "5,000.00", "200.00/Day"],
    ["Senior(Ages 66-80 years old)", "50,000.00", "50,000,00", "5,000.00", "5,000.00", "100.00/Day"],
    ["Senior Plus(Ages 81-85 years old)", "50,000.00", "50,000,00", "5,000.00", "5,000.00", "100.00/Day"],
  ]

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            {titles.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contents.map((content, row) => (
            <tr key={row}>
              {content.map((item, col) => (
                <td key={col}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const BloodType = () => {
  const bloodType = ["Select Blood Type", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "I do not know"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-2 gap-4">
      <select defaultValue="Select Blood Type" className={`select w-full md:col-span-1 text-gray-400 text-md input-bordered focus:outline-none border-solid focus:border-2 focus:border-[#00aaff]`}>
        {bloodType.map((type, index) => (
          <option key={index}>{type}</option>
        ))}
      </select>
    </div>
  )
}

export const Questions = ({ question, radioNumber1, radioNumber2, radioText1, radioText2, isFurtherQuestion }) => {
  const [ showYes, setShowYes ] = useState(null);

  const handleRadioChange = (event) => {
    setShowYes(event.target.name);
  }

  return (
    <div className="flex flex-col gap-2 mb-4">
      <p className='text-sm text-[#fe006e]'>{question} *</p>
      <div className="flex content-center gap-2">
        <input type="radio" name={`radio-${radioNumber1}`} className="radio"  onChange={handleRadioChange} checked={showYes === `radio-${radioNumber1}`} />
        <p className='text-sm'>{radioText1}</p>
      </div>

      <div className="flex content-center gap-2">
        <input type="radio" name={`radio-${radioNumber2}`} className="radio" onChange={handleRadioChange} checked={showYes === `radio-${radioNumber2}`} />
        <p className='text-sm'>{radioText2}</p>
      </div>

      {isFurtherQuestion && 
        <div className={`${showYes === `radio-${radioNumber1}` ? "pb-5" : "hidden"}`}>
          <p className="text-sm text-[#fe006e]">Please specify *</p>
          <input 
            type="text" 
            placeholder="Please specify" 
            className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
            name='username'
            autoComplete='false'
          />
        </div>
      }
    </div>
  )
}

export const EmergencyContact = () => {
  return (
    <>
      <PersonalInformation />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <InputLabel id='emergencyContactNumber' text='Contact Number' isImportant={true} />
          <ContactNumber length={11} placeholder='e.g. 09123456789' />
        </div>

        <div>
          <InputLabel id='emergencyRelationship' text='Relationship' isImportant={true} />
          <ContactNumber length={11} placeholder='e.g. 09123456789' />
        </div>
      </div>
    </>
  )
}