import React from 'react'
import { InputHeader, InputLabel, Select } from '../forms/Input'
import PersonalInformation from '../forms/PersonalInformation'
import SubmitButton from '../forms/SubmitButton';
import Contact from '../forms/Contact'
import { useForm } from 'react-hook-form';

const RequestForDonorContent = () => {
  const bloodType = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "I do not know"];
  const types = [<option key="Select Blood Type" disabled={false}>Select Blood Type</option>];

  for(let i = 0; i < bloodType.length; ++i) {
    types.push(<option key={i + 1}>{bloodType[i]}</option>);
  }

  const { register, handleSubmit } = useForm();

  return (
    <div className='mx-2 lg:mx-40 component'>
      <div className="pb-5">
        <InputHeader title="Requester Details" />
        <PersonalInformation register={register} />
      </div>

      <div className="pb-5">
        <div className="pb-5">
        <InputHeader title="Blood Type" />
        </div>

        <InputLabel id='bloodType' text="Select Blood Type" isImportant={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select defaultValue='Select Blood Type' col={1} options={types} register={register} name='blood_type' />
        </div>
      </div>

      <div className="py-5">
        <InputHeader title="Contact Details" />
        <Contact register={register} />
      </div>

      <SubmitButton />
    </div>
  )
}

export default RequestForDonorContent