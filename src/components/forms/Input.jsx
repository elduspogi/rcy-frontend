import React, { useEffect, useState } from 'react'
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

export const Select = ({ defaultValue, col, options }) => {
  return (
    <select defaultValue={defaultValue} className={`select w-full md:col-span-${col} text-gray-400 text-md input-bordered focus:outline-none border-solid focus:border-2 focus:border-[#fe006e]`}>
      { options }
    </select>
  )
}

export const Birthdate = ({ col }) => {
  return (
    <div className={`form-control md:col-span-${col}`}>
      <input 
        type="date" 
        placeholder="Birthdate" 
        className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-gray-400 text-sm" 
        name='username'
        autoComplete='false'
      />
    </div>
  )
}

export const Address = () => {
  const [ selected, setSelected ] = useState(null);
  const handleAddressSelected = (e) => {
    setSelected(e.target.name);
  }

  const barangays = [
    {title: "Bagong Silang"}, {title: "Calendola"}, {title: "Chrysanthemum"}, {title: "Cuyab"}, {title: "Estrella"},
    {title: "Fatima"}, {title: "G.S.I.S"}, {title: "Landayan"}, {title: "Langgam"}, {title: "Laram"},
    {title: "Magsaysay"}, {title: "Maharlika"}, {title: "Narra"}, {title: "Nueva"}, {title: "Pacita 1"},
    {title: "Pacita 2"}, {title: "Poblacion"}, {title: "Riverside"}, {title: "Rosario"}, {title: "Sampaguita"},
    {title: "San Antonio"}, {title: "San Lorenzo Ruiz"}, {title: "San Roque"}, {title: "San Vicente"}, {title: "Santo Nino"},
    {title: "United Bayanihan"}, {title: "United Better Living"}
  ];

  return (
    <>
      <div className="flex flex-col gap-2 py-5 mb-4">
        <div className="flex content-center gap-2">
          <input type="radio" name="radio-1" className="radio"  onChange={handleAddressSelected} checked={selected === "radio-1"} />
          <p className='text-sm'>San Pedro City</p>
        </div>

        <div className="flex content-center gap-2">
          <input type="radio" name="radio-2" className="radio" onChange={handleAddressSelected} checked={selected === "radio-2"} />
          <p className='text-sm'>Other City</p>
        </div>
      </div>

      <div id="sanPedroCitizen" className={`${selected === 'radio-1' ? '': 'hidden'}`}>
        <label htmlFor='lastName' className='text-sm p-2 text-[#fe006e]'>Barangay *</label>
        <select defaultValue="Select Barangay" className="select w-full mb-5 text-gray-400 text-md input-bordered focus:outline-none border-solid focus:border-2 focus:border-[#fe006e]">
          <option disabled={false}>Select Barangay</option>
          {barangays.map((barangay, index) => (
            <option key={index}>{barangay.title}</option>
          ))}
        </select>

        <label htmlFor='lastName' className='text-sm p-2 text-[#fe006e]'>Street Address *</label>
        <div className="form-control md:col-span-2 pb-5">
            <input 
              type="text" 
              placeholder="Street Address" 
              className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
              name='username'
              autoComplete='false'
            />
        </div>
      </div>

      <div id="otherCitizen" className={`${selected === 'radio-2' ? '': 'hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor='lastName' className='text-sm p-2 text-[#fe006e]'>City *</label>
            <div className="form-control md:col-span-2">
              <input 
                type="text" 
                placeholder="City" 
                className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
                name='username'
                autoComplete='false'
              />
            </div>
          </div>

          <div>
            <label htmlFor='lastName' className='text-sm p-2 text-[#fe006e]'>Barangay *</label>
            <div className="form-control md:col-span-2">
              <input 
                type="text" 
                placeholder="Barangay" 
                className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-gray-400 text-sm" 
                name='username'
                autoComplete='false'
              />
            </div>
          </div>
        </div>

        <div className="form-control md:col-span-2 py-5">
        <label htmlFor='lastName' className='text-sm p-2 text-[#fe006e]'>Street Address *</label>
          <input 
            type="text" 
            placeholder="Street Address" 
            className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
            name='username'
            autoComplete='false'
          />
        </div>
      </div>
    </>
  )
}

export const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-5 justify-center">
      <div className="form-control md:col-span-2">
        <label htmlFor='lastName' className='text-sm p-2 text-[#fe006e]'>Email Address *</label>
        <input 
          type="email" 
          placeholder="e.g. johnsmith@gmail.com" 
          className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
          name='username'
          autoComplete='false'
        />
      </div>

      <div className="form-control md:col-span-2">
        <InputLabel id='' text='Contact Number' isImportant={true} />
        <ContactNumber length={11} placeholder='e.g. 09123456789' />
      </div>

      <div className="form-control md:col-span-4">
        <label htmlFor='lastName' className='text-sm p-2 text-[#fe006e]'>Facebook Link *</label>
        <input 
          type="text" 
          placeholder="e.g. https://www.facebook.com/rcysanpedro" 
          className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
          name='username'
          autoComplete='false'
        />
      </div>
    </div>
  )
}

export const ContactNumber = ({ length, placeholder }) => {
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
        name='username'
        autoComplete='false'
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
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

export const PaymentDetails = ({ gcashNumber, name, position }) => {
  return (
    <div className='pt-5'>
      <h1>GCash Number: {gcashNumber}</h1>
      <h1>{name}</h1>
      <h1>{position}</h1>
      <h1>City of San Pedro Red Cross Youth Council</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 py-5 gap-4">
        <div className="form-control md:col-span-2">
          
          <InputLabel id='referenceNumber' text='Reference Number' isImportant={true} />
          <input 
            type="text" 
            placeholder="Reference Number" 
            className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
            name='reference_number'
            autoComplete='false'
            id='referenceNumber'
          />
        </div>
      </div>
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

export const MemberVolunteerRadios = () => {
  const location = useLocation();
  const type = location.pathname === '/register/member' ? 'radio-3' : 'radio-4';
  const [ joinSelected, setJoinSelected ] = useState(type);

  useEffect(() => {
    setJoinSelected(type);
  }, [type]);

  const handleJoinTypeSelected = (e) => {
    setJoinSelected(e.target.name);
  }

  return (
    <>
      <div className="flex flex-col gap-2 py-5 mb-4">
        <div className="flex content-center gap-2">
          <input type="radio" name="radio-3" className="radio"   checked={joinSelected === "radio-3"} />
          <p className='text-sm'>Member</p>
        </div>

        <div className="flex content-center gap-2">
          <input type="radio" name="radio-4" className="radio"  checked={joinSelected === "radio-4"} />
          <p className='text-sm'>Volunteer</p>
        </div>

        <div id="memberPayment" className={`${joinSelected === "radio-3" ? "" : "hidden"}`}>
          <InputHeader title="Member Accidental Assistance Program (MAAB)" />
          <MaabTable />

          <div className="pt-5">
          <InputHeader title="Payment Details" />
          <PaymentDetails gcashNumber="09123456789" name="John Smith" position="Chairperson, Committee on Volunteers Rights and Welfare" />
          </div>
        </div>
      </div>
    </>
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