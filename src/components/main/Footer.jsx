import React from 'react'
import RCYLogo from '../../assets/img/red-cross-youth.png'
import SPCLogo from '../../assets/img/san-pedro.png'
import { GoDotFill } from 'react-icons/go'
import { FaFacebook } from 'react-icons/fa'

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
        {title: "About", link: "#about"},
        {title: "Join Us", link: "#join-us"},
        {title: "Privacy Policy", link:"#join-us"}
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
                  <GoDotFill className='w-2 group-hover:text-[#00aaff]' />
                  <a href={item.link} className="font-sm group-hover:text-[#00aaff]">{item.title}</a>
                </div>
              ))}
            </nav>
          ))}

          <nav>
            <h6 className="footer-title title">Contact Us</h6>
              <div className="flex flex-col justify-center gap-2">
                <p className='hover:cursor-pointer'><strong>Email:</strong> <a href={`mailto:${email}`} className='hover:text-[#00aaff]'>{email}</a></p>
                <p><strong>Mobile:</strong> {mobile}</p>
              </div>
          </nav>

          <nav>
            <h6 className="footer-title title">Socials</h6>
              <div className="flex flex-col justify-center gap-2">
                <a href={socials[0]} target='_blank' className='text-3xl text-[#00aaff] hover:text-[#00679b] dark:text-[#00679b] hover:dark:text-[#00aaff]'>
                  <FaFacebook />
                </a>
              </div>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default Footer