import React, { useState } from 'react'
import { InputHeader, InputLabel, Select } from '../forms/Input'
import PersonalInformation from '../forms/PersonalInformation'
import SubmitButton from '../forms/SubmitButton';
import Contact from '../forms/Contact'
import { useForm } from 'react-hook-form';
import axiosClient from '../../axios-client';
import { goToTop } from '../../hooks/Scroll';
import { FaCheck, FaCheckCircle } from 'react-icons/fa';
import Alert from '../forms/Alert';
import { MdError } from 'react-icons/md';

const RequestForDonorContent = () => {
  const bloodType = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "I do not know"];
  const types = [<option key="Select Blood Type" disabled={false}>Select Blood Type</option>];

  for(let i = 0; i < bloodType.length; ++i) {
    types.push(<option key={i + 1}>{bloodType[i]}</option>);
  }

  const { register, handleSubmit, reset } = useForm();
  const [ errors, setErrors ] = useState({});
  const [ success, setSuccess ] = useState({});
  
  console.log(errors);
  const onSubmit = (payload) => {
    axiosClient.post('/request/donor', payload)
      .then(({ data }) => {
        goToTop();
        setErrors({});
        reset();
        setSuccess(data);
        setErrors({});
      })
      .catch((err) => {
        const response = err.response;
        if(response && response.status === 422) {
          goToTop();
          setErrors({...response.data.errors, 'message': 'Saving unsuccessful. Please fill out the form correctly.'});
        }
      })
  }

  return (
    <div className='mx-2 lg:mx-40 component'>
      {success.message &&
        <Alert bgColor={'bg-[#fe006e]'} icon={<FaCheckCircle />} message={success.message} />
      }

      {errors.message &&
        <Alert bgColor={'bg-red-500'} icon={<MdError />} message={errors.message} />
      }

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pb-5">
          <InputHeader title="Requester Details" />
          <PersonalInformation register={register} fName={errors.first_name} lName={errors.last_name} />
        </div>

        <div className="pb-5">
          <div className="pb-5">
          <InputHeader title="Blood Type" />
          </div>

          <InputLabel id='bloodType' text="Select Blood Type" isImportant={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select defaultValue='Select Blood Type' col={1} options={types} register={register} name='blood_type' error={errors.blood_type} />
          </div>
          {errors.blood_type && <span className='text-sm text-red-500'>{errors.blood_type}</span>}
        </div>

        <div className="py-5">
          <InputHeader title="Contact Details" />
          <Contact register={register} email={errors.email} contactNumber={errors.contact_number} fbLink={errors.facebook_link} />
        </div>

        <SubmitButton />
      </form>
    </div>
  )
}

export default RequestForDonorContent