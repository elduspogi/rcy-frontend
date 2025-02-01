import React from 'react'
import PersonalInformation from '../forms/PersonalInformation'
import { Birthdate, ContactNumber, EmergencyContact, InputHeader, InputLabel, Questions, Select } from '../forms/Input'
import SubmitButton from '../forms/SubmitButton';
import Address from '../forms/Address'
import Contact from '../forms/Contact'
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

  const qualifications = [
    { text: "Must be in", strong: "good health", suffix: "and generally feeling well (no cough, colds, fever, sore throat)." },
    { text: "Must have at least", strong: "5 or more", suffix: "hours of uninterrupted sleep." },
    { text: "Must be between", strong: "16 to 65 years old", suffix: "(16 and 17 need parent consent while first-time donors should be at the maximum age of 59, 60-65 years old are allowed to donate provided that they are a regular donor who donates blood annually.)" },
    { text: "Must at least weigh", strong: "fifty(50) kilograms/one-hundred ten(110) pounds", suffix: "and above." },
    { text: "Must have", strong: "no alcohol intake/smoking", suffix: "within twenty-four(24) hours." },
    { text: "Tattoo and ear/body piercing can donate blood provided that they have the tattoo/piercing for", strong: "at least 1 year", suffix: "." },
    { text: "Seafarer can donate blood", strong: "after one(1) year", suffix: "of stay in our country." },
    { text: "Other qualifications will be", strong: "assessed upon physical assessment", suffix: "." }
  ];

  return (
    <div className='mx-2 lg:mx-40 component'>
      <div className="pb-10">
        <InputHeader title="Qualifications for Blood Donor" />
        <div className='py-5'>
          {qualifications.map((q, index) => (
            <p key={index} className="text-sm py-2">{index + 1}. {q.text} <strong className='text-[#fe006e]'>{q.strong}</strong> {q.suffix}</p>
          ))}
        </div>

        <InputHeader title="Personal Details" />
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