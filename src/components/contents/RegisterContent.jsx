import React, { useEffect, useState } from 'react'
import PersonalInformation from '../forms/PersonalInformation';
import { Address, Birthdate, Contact, InputHeader, InputLabel, MaabTable, MemberVolunteerRadios, PaymentDetails, Select } from '../forms/Input';
import SubmitButton from '../forms/SubmitButton';

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