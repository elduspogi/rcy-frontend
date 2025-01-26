import React from 'react'
import PersonalInformation from '../forms/PersonalInformation'
import { Address, Birthdate, Contact, ContactNumber, EmergencyContact, InputHeader, InputLabel, Questions, Select } from '../forms/Input'
import SubmitButton from '../forms/SubmitButton';

const RegisterDonorContent = () => {
  const bloodType = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "I do not know"];
  const types = [<option key="Select Blood Type" disabled={false}>Select Blood Type</option>];

  for(let i = 0; i < bloodType.length; ++i) {
    types.push(<option key={i + 1}>{bloodType[i]}</option>);
  }

  const age = [<option key="select-age" disabled={false}>Select Age</option>]
  for(let i = 15; i <= 30; ++i) {
    age.push(<option key={i}>{i}</option>);
  }

  return (
    <div className='mx-2 lg:mx-40 component'>
      <div className="pb-10">
        <h1 className='text-md lg:text-lg text-[#00679b]'>Personal Details</h1>
        <PersonalInformation />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <InputLabel id='age' text='Age' isImportant={true} />
            <ContactNumber length={3} placeholder='Enter Age' />
          </div>

          <div>
            <InputLabel id='birthdate' text='Birthdate' isImportant={true} />
            <Birthdate col='2' />
          </div>

          <div>
            <InputLabel id='selectBloodType' text='Blood Type' isImportant={true} />
            <Select defaultValue="Select Blood Type" col="2" options={types} />
          </div>

          <div>
            <InputLabel id='weight' text='Weight (kg)' isImportant={true} />
            <ContactNumber length={3} placeholder='Enter weight' />
          </div>
        </div>
      </div>

      <div className="pb-5">
        <InputHeader title="Address" />
        <Address />

        <InputHeader title="Contact Details" />
        <Contact />

        <InputHeader title='Health Details' />
        
        <Questions question='Have you ever donated blood before?' radioNumber1={5} radioNumber2={6} radioText1='Yes' radioText2='No' isFurtherQuestion={false} />

        <Questions question='Do you have any medical conditions that could affect your donation?' radioNumber1={7} radioNumber2={8} radioText1='Yes' radioText2='No' isFurtherQuestion={true}  />

        <Questions question='In the past 28 days, have you traveled outside the Philippines?' radioNumber1={9} radioNumber2={10} radioText1='Yes' radioText2='No' isFurtherQuestion={true}  />

        <Questions question='In the past 28 days, have you ever had close contact (lived with, worked with, traveled with, or cared for) a confirmed COVID-19 patient, or of a person who traveled to countries with COVID-19 local transmission?' radioNumber1={11} radioNumber2={12} radioText1='Yes' radioText2='No' isFurtherQuestion={false}  />

        <Questions question='Have you ever had close contact with a person exhibiting symptoms of acute respiratory illness?' radioNumber1={13} radioNumber2={14} radioText1='Yes' radioText2='No' isFurtherQuestion={false}  />

        <InputHeader title="Emergency Contact" />
        <EmergencyContact />
      </div>
      <SubmitButton />
    </div>
  )
}

export default RegisterDonorContent