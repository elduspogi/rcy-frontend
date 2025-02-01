import React, { useEffect, useRef, useState } from 'react'
import PersonalInformation from '../forms/PersonalInformation';
import { Birthdate, InputHeader, InputLabel, Select } from '../forms/Input';
import SubmitButton from '../forms/SubmitButton';
import Address from '../forms/Address'
import Contact from '../forms/Contact'
import MemberVolunteerRadios from '../forms/MemberVolunteerRadios';
import axiosClient from '../../axios-client';
import { goToTop } from '../../hooks/Scroll';
import { useForm } from 'react-hook-form';

const RegisterContent = () => {
  const age = [<option key="select-age" disabled={false}>Select Age</option>]
  for(let i = 15; i <= 30; ++i) {
    age.push(<option key={i} value={i}>{i}</option>);
  }

  const gender = ["Male", "Female"];
  const genderOptions = [<option key="Select Gender" disabled={false}>Select Gender</option>];

  for(let i = 0; i < gender.length; ++i) {
    genderOptions.push(<option key={i + 1} value={gender[i]}>{gender[i]}</option>);
  }

  const { register, handleSubmit, setValue } = useForm();
  const [ errors, setErrors ] = useState({});

  const onSubmit = (payload) => {
    axiosClient.post('/register', payload)
      .then(({data}) => {
        console.log(data);
      })
      .catch((err) => {
        const response = err.response;
        if(response && response.status === 422) {
          setErrors(response.data.errors);
        }
      })
  }

  return (
    <div className='component mx-2 lg:mx-40 py-16'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <InputHeader title="Personal Details" />
      <PersonalInformation register={register} errors={errors} />

      <InputLabel text='Gender' isImportant={true} />
      <Select 
        defaultValue="Select Gender"
        col="2"
        options={genderOptions}
        register={register} 
        name='gender'
      />

      <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-4">
        <div>
          <InputLabel text='Age' isImportant={true} />
          <Select 
            defaultValue="Select Age"
            col="2" 
            options={age}
            register={register}
            name="age" />
        </div>

        <div>
          <InputLabel id='birthdate' text='Birthdate' isImportant={true} />
          <Birthdate register={register} />
        </div>
      </div>

      <InputHeader title="Address" />
      <Address register={register} setValue={setValue} />

      <InputHeader title="Contact Details" />
      <Contact register={register}  />
      
      <InputHeader title="Join As" />
      <MemberVolunteerRadios register={register} setValue={setValue} />

      <SubmitButton />
      </form>
    </div>
  )
}

export default RegisterContent