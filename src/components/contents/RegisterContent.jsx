import React, { useEffect, useState } from 'react'

const RegisterContent = ({ type }) => {
  const [ selected, setSelected ] = useState(null);
  const [ joinSelected, setJoinSelected ] = useState(null);
  const [ phoneNumber, setPhoneNumber ] = useState("");

  const age = [<option key="select-age" disabled={false}>Select Age</option>]
  for(let i = 15; i <= 30; ++i) {
    age.push(<option key={i}>{i}</option>);
  }

  const handleAddressSelected = (e) => {
    setSelected(e.target.name);
  }

  useEffect(() => {
    setJoinSelected(type === 'Member' ? 'radio-3' : 'radio-4');
  }, [])

  const handleJoinTypeSelected = (e) => {
    setJoinSelected(e.target.name);
  }

  const barangays = [
    {title: "Bagong Silang"}, {title: "Calendola"}, {title: "Chrysanthemum"}, {title: "Cuyab"}, {title: "Estrella"},
    {title: "Fatima"}, {title: "G.S.I.S"}, {title: "Landayan"}, {title: "Langgam"}, {title: "Laram"},
    {title: "Magsaysay"}, {title: "Maharlika"}, {title: "Narra"}, {title: "Nueva"}, {title: "Pacita 1"},
    {title: "Pacita 2"}, {title: "Poblacion"}, {title: "Riverside"}, {title: "Rosario"}, {title: "Sampaguita"},
    {title: "San Antonio"}, {title: "San Lorenzo Ruiz"}, {title: "San Roque"}, {title: "San Vicente"}, {title: "Santo Nino"},
    {title: "United Bayanihan"}, {title: "United Better Living"}
  ];


  const handlePhoneNumberChange = (event) => {
    const val = event.target.value.replace(/[^0-9]/g, "");

    val.length > 11 ? event.preventDefault() : setPhoneNumber(val);
  }

  return (
    <div className='component mx-2 lg:mx-40 py-16'>
      <h1 className='text-md lg:text-lg text-[#00679b]'>Personal Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 py-5 gap-4">
        <div className="form-control md:col-span-2">
          <label htmlFor='firstName' className='text-sm p-2 text-[#00679b]'>First Name *</label>
          <input 
            type="text" 
            placeholder="e.g. Juan" 
            className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#00aaff] text-sm" 
            name='first_name'
            autoComplete='false'
            id='firstName'
          />
        </div>

        <div className="form-control md:col-span-2">
          <label htmlFor='lastName' className='text-sm p-2 text-[#00679b]'>Last Name *</label>
          <input 
            type="text" 
            placeholder="e.g. Dela Cruz" 
            className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#00aaff] text-sm" 
            name='last_name'
            autoComplete='false'
            id='lastName'
          />
        </div>

        <div className="form-control md:col-span-1">
          <label htmlFor='middleName' className='text-sm p-2 text-[#00679b]'>Middle Name</label>
          <input 
            type="text" 
            placeholder="e.g. Antonio" 
            className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#00aaff] text-sm" 
            name='middle_name'
            autoComplete='false'
            id='middleName'
          />
        </div>
      </div>

      <label htmlFor='lastName' className='text-sm p-2 text-[#00679b]'>Gender *</label>
      <select defaultValue="Select Gender" className="select w-full md:col-span-2 text-gray-400 text-md input-bordered focus:outline-none border-solid focus:border-2 focus:border-[#00aaff]">
          <option disabled={false}>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-4">
        <div>
          <label htmlFor='lastName' className='text-sm p-2 text-[#00679b]'>Age *</label>
          <select defaultValue="Select Gender" className="select col-span-2 w-full text-gray-400 text-md input-bordered focus:outline-none border-solid focus:border-2 focus:border-[#00aaff]">
            {age}
          </select>
        </div>

        <div>
          <label htmlFor='lastName' className='text-sm p-2 text-[#00679b]'>Birthdate *</label>
          <div className="form-control md:col-span-2">
            <input 
              type="date" 
              placeholder="Birthdate" 
              className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#00aaff] text-gray-400 text-sm" 
              name='username'
              autoComplete='false'
            />
          </div>
        </div>
      </div>

      <h1 className='text-md lg:text-lg text-[#00679b]'>Address</h1>
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
        <label htmlFor='lastName' className='text-sm p-2 text-[#00679b]'>Barangay *</label>
        <select defaultValue="Select Barangay" className="select w-full mb-5 text-gray-400 text-md input-bordered focus:outline-none border-solid focus:border-2 focus:border-[#00aaff]">
          <option disabled={false}>Select Barangay</option>
          {barangays.map((barangay, index) => (
            <option key={index}>{barangay.title}</option>
          ))}
        </select>

        <label htmlFor='lastName' className='text-sm p-2 text-[#00679b]'>Street Address *</label>
        <div className="form-control md:col-span-2 pb-5">
            <input 
              type="text" 
              placeholder="Street Address" 
              className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#00aaff] text-sm" 
              name='username'
              autoComplete='false'
            />
        </div>
      </div>

      <div id="otherCitizen" className={`${selected === 'radio-2' ? '': 'hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor='lastName' className='text-sm p-2 text-[#00679b]'>City *</label>
            <div className="form-control md:col-span-2">
              <input 
                type="text" 
                placeholder="City" 
                className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#00aaff] text-sm" 
                name='username'
                autoComplete='false'
              />
            </div>
          </div>

          <div>
            <label htmlFor='lastName' className='text-sm p-2 text-[#00679b]'>Barangay *</label>
            <div className="form-control md:col-span-2">
              <input 
                type="text" 
                placeholder="Barangay" 
                className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#00aaff] text-gray-400 text-sm" 
                name='username'
                autoComplete='false'
              />
            </div>
          </div>
        </div>

        <div className="form-control md:col-span-2 py-5">
        <label htmlFor='lastName' className='text-sm p-2 text-[#00679b]'>Street Address *</label>
          <input 
            type="text" 
            placeholder="Street Address" 
            className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#00aaff] text-sm" 
            name='username'
            autoComplete='false'
          />
        </div>
      </div>

      <h1 className='text-md lg:text-lg text-[#00679b]'>Contact Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-5 justify-center">
        <div className="form-control md:col-span-2">
          
        <label htmlFor='lastName' className='text-sm p-2 text-[#00679b]'>Email Address *</label>
          <input 
            type="email" 
            placeholder="e.g. johnsmith@gmail.com" 
            className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#00aaff] text-sm" 
            name='username'
            autoComplete='false'
          />
        </div>

        <div className="form-control md:col-span-2">
        <label htmlFor='lastName' className='text-sm p-2 text-[#00679b]'>Contact Number *</label>
          <input 
            type="text" 
            placeholder="e.g. 09123456789" 
            className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#00aaff] text-sm" 
            name='username'
            autoComplete='false'
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
      </div>
      
      <h1 className='text-md lg:text-lg text-[#00679b]'>Join As</h1>
      <div className="flex flex-col gap-2 py-5 mb-4">
        <div className="flex content-center gap-2">
          <input type="radio" name="radio-3" className="radio"  onChange={handleJoinTypeSelected} checked={joinSelected === "radio-3"} />
          <p className='text-sm'>Member</p>
        </div>

        <div className="flex content-center gap-2">
          <input type="radio" name="radio-4" className="radio" onChange={handleJoinTypeSelected} checked={joinSelected === "radio-4"} />
          <p className='text-sm'>Volunteer</p>
        </div>
      </div>

      <div id="memberPayment">

      </div>

      <button className="submit-button text-sm w-full bg-gradient-to-r from-[#fe006e] to-[#0095ff9f] p-3 text-white rounded-md">SUBMIT</button>
    </div>
  )
}

export default RegisterContent