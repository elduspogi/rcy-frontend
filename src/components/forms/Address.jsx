import React, { useState } from 'react'

const Address = ({ register, setValue }) => {
  const [ selected, setSelected ] = useState(null);
  const [ streetAddress, setStreetAddress ] = useState(null);

  const handleAddressSelected = (e) => {
    setSelected(e.target.name);
    // cityRef.current.value = e.target.name === 'radio-1' ? 'San Pedro City' : null;

    selected === 'radio-1' ? setValue('city', 'San Pedro City') : null;
  }

  const handleBarangayChange = (e) => {
    const label = document.getElementById('selectBarangayOption');
    label.setAttribute('disabled', true);

    setValue('barangay', e.target.value);
  }

  const handleStreetAddressChange = (e) => {
    setValue('street_address', e.target.value);
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
          <input
            type="radio" 
            name="radio-1" 
            className="radio"  
            onChange={handleAddressSelected} 
            checked={selected === "radio-1"} 
          />
          <p className='text-sm'>San Pedro City</p>
        </div>

        <div className="flex content-center gap-2">
          <input 
            type="radio" 
            name="radio-2" 
            className="radio" 
            onChange={handleAddressSelected} 
            checked={selected === "radio-2"} 
          />
          <p className='text-sm'>Other City</p>
        </div>
      </div>

      <div id="sanPedroCitizen" className={`${selected === 'radio-1' ? '': 'hidden'}`}>
        <label htmlFor='lastName' className='text-sm p-2 text-[#fe006e]'>Barangay *</label>
        <select
          onChange={handleBarangayChange}
          className="select w-full mb-5 text-gray-400 text-md input-bordered focus:outline-none border-solid focus:border-2 focus:border-[#fe006e]"
        >
          <option disabled={false} id='selectBarangayOption'>Select Barangay</option>
          {barangays.map((barangay, index) => (
            <option key={index} value={barangay.title}>{barangay.title}</option>
          ))}
        </select>

        <label htmlFor='lastName' className='text-sm p-2 text-[#fe006e]'>Street Address *</label>
        <div className="form-control md:col-span-2 pb-5">
            <input 
              type="text" 
              placeholder="Street Address" 
              className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-2 focus:border-[#fe006e] text-sm" 
              autoComplete='false'
              {...register('street_address')}
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
                autoComplete='false'
                {...register('city')}
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
                autoComplete='false'
                onChange={handleStreetAddressChange}
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
            autoComplete='false'
            onChange={handleStreetAddressChange}
          />
        </div>
      </div>
    </>
  )
};

export default Address