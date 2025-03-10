import React from 'react'
import RCYLogo from '../../assets/img/red-cross-youth.png'
import SPCLogo from '../../assets/img/san-pedro.png'
import { GoDotFill } from 'react-icons/go'
import { FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  const email = "rcy@sanpedro.com";
  const mobile = "09123456789";
  const socials = [
    // facebook
    "https://www.facebook.com/rcysanpedro",
  ]

  const footerItems = [
    {
      title: "Sitemap",
      items: [
        {title: "Home", link: "/"},
        {title: "About", link: "/#about"},
        {title: "Join Us", link: "/#join-us"},
        {title: "Privacy Policy", link:"/privacy-policy"}
      ]
    }
  ]

  return (
    <>
      <div className="px-8 lg:px-40 footer-container">
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
                <div className="flex flex-row justify-center gap-2 group hover:cursor-pointer" key={item.title}>
                  <GoDotFill className='w-2 text-[#fe006e] group-hover:text-[#fe006e7a] pt-1' />
                  {item.link === '/privacy-policy' || item.link === '/'
                    ? 
                    <Link to={item.link} className="font-sm font-semibold dark:font-normal text-[#fe006e] hover:text-[#fe006e7a]">{item.title}</Link> 
                    : 
                    <a href={item.link} className="font-sm font-semibold dark:font-normal text-[#fe006e] hover:text-[#fe006e7a]">{item.title}</a>
                  }
                </div>
              ))}
            </nav>
          ))}

          <nav>
            <h6 className="footer-title title">Contact Us</h6>
              <div className="flex flex-col justify-center gap-2">
                <p><strong>Email:</strong> <a href={`mailto:${email}`} className='font-semibold text-[#fe006e] hover:text-[#fe006e7a] cursor-pointer'>{email}</a></p>
                <p><strong>Mobile:</strong> <span className='font-semibold text-[#fe006e]'>{mobile}</span></p>
              </div>
          </nav>

          <nav>
            <h6 className="footer-title title">Socials</h6>
              <div className="flex flex-col justify-center gap-2">
                <a href={socials[0]} target='_blank' className='text-3xl text-[#fe006e] hover:text-[#fe006e7a]'>
                  <FaFacebook />
                </a>
              </div>
          </nav>
        </footer>
      </div>

      <div className='flex justify-center py-4 footer-container' >
          <p className='text-xs md:text-sm font-semibold title'>Copyright © 2025 City of San Pedro Red Cross Youth</p>
      </div>
    </>
  )
}

export default Footer