import React from 'react'
import { InputHeader } from '../forms/Input'

const PrivacyPolicyContent = () => {
  const lastUpdatedAt = "January 26, 2025";

  const contents = [
    {title: "Information Collection", text:"We collect personal information that you voluntarily provide to us when you register for our programs, make a donation, or contact us for information. This may include your name, address, email address, phone number, and payment information."},
    {title: "Use of Information", text:"We use the information we collect to provide you with the services you have requested, to process donations, and to communicate with you about our programs and events. We may also use your information to improve our services and to personalize your experience with us."},
    {title: "Information Sharing", text:"We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential."},
    {title: "Data Security", text:"We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential."},
    {title: "Changes to our Privacy Policy", text:"We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes."},
    {title: "Contact Us", text:"If you have any questions about this privacy policy, please contact us at", contact: "sanpedro@redcrossyouth.com"},
  ];

  return (
    <div className='mx-2 lg:mx-40 component'>
      <div className="px-10">
      <p className='pb-5 text-sm'>Last Updated At: <span className="text-[#fe006e]">{lastUpdatedAt}</span></p>
        <p className='pb-5'>Welcome to the City of San Pedro Red Cross Youth. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.</p>
        {contents.map((content, index) => (
          <div key={index}>
            <InputHeader title={content.title} />
            <p className='py-5'>{content.text} {content.contact && <a href={`mailto:${content.contact}`} className='text-[#fe006e]'>{content.contact}</a>}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PrivacyPolicyContent