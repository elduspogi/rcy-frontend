import React, { useEffect, useState } from 'react'
import PersonalInformation from '../forms/PersonalInformation';
import { Address, Birthdate, Contact, InputHeader, InputLabel, MaabTable, MemberVolunteerRadios, PaymentDetails, Select } from '../forms/Input';
import SubmitButton from '../forms/SubmitButton';

const RegisterContent = () => {
  const age = [<option key="select-age" disabled={false}>Select Age</option>]
  for(let i = 15; i <= 30; ++i) {
    age.push(<option key={i}>{i}</option>);
  }

  const gender = ["Male", "Female"];
  const genderOptions = [<option key="Select Gender" disabled={false}>Select Gender</option>];

  for(let i = 0; i < gender.length; ++i) {
    genderOptions.push(<option key={i + 1}>{gender[i]}</option>);
  }

  return (
    <div className='component mx-2 lg:mx-40 py-16'>
      <InputHeader title="Personal Details" />
      <PersonalInformation />

      <InputLabel id='selectGender' text='Gender' isImportant={true} />
      <Select defaultValue="Select Gender" col="2" options={genderOptions} />

      <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-4">
        <div>
          <InputLabel id='selectAge' text='Age' isImportant={true} />
          <Select defaultValue="Select Age" col="2" options={age} />
        </div>

        <div>
          <InputLabel id='birthdate' text='Birthdate' isImportant={true} />
          <Birthdate />
        </div>
      </div>

      <InputHeader title="Address" />
      <Address />

      <InputHeader title="Contact Details" />
      <Contact />
      
      <InputHeader title="Join As" />
      <MemberVolunteerRadios />

      <SubmitButton />
    </div>
  )
}

export default RegisterContent