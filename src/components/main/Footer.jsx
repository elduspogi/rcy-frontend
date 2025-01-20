import React from 'react'
import RCYLogo from '../../assets/img/red-cross-youth.png'
import SPCLogo from '../../assets/img/san-pedro.png'
import { GoDotFill } from 'react-icons/go'

const Footer = () => {
  const footerItems = [
    {
      title: "Services",
      items: [
        {title: "Blood Donation"},
        {title: "First Aid Training"},
        {title: "Basic Life Support Training"},
      ]
    },
    {
      title: "Sitemap",
      items: [
        {title: "Home"},
        {title: "About"},
        {title: "Join Us"},
      ]
    },
    {
      title: "Legal",
      items: [
        {title: "Terms & Conditions"},
        {title: "Privacy Policy"},
        {title: "Cookies"},
      ]
    }
  ]

  return (
    <>
      <div className="px-8 lg:px-40 bg-gray-50 dark:bg-[#1d232a] footer-container">
        <footer className="footer text-base-content py-20">
          <aside>
            <p className='font-bold text-xl'>
              City of San Pedro
              <br/>
              <span className='font-bold text-3xl title'>
                Red Cross Youth
              </span>
            </p>
            <div className="flex flex-row">
              <img src={RCYLogo} alt="RCY Logo" className='object-cover size-16 mr-2 blue-logo' />
              <img src={SPCLogo} alt="RCY Logo" className='object-cover size-16 mr-2 red-logo' />
            </div>
          </aside>

          {footerItems.map((group) => (
            <nav key={group.title}>
              <h6 className="footer-title title">{group.title}</h6>
              {group.items.map((item) => (
                <div className="flex flex-row justify-center gap-2" key={item.title}>
                  <GoDotFill className='w-3 mt-[0.5px]' />
                  <a className="font-medium hover:text-[#00aaff]">{item.title}</a>
                </div>
              ))}
            </nav>
          ))}

        </footer>
      </div>
    </>
  )
}

export default Footer