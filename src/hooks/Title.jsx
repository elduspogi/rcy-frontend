import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Title = () => {
  const location = useLocation();
  const rcy = 'Red Cross Youth - City of San Pedro';

  const routes = {
    '/': `${rcy}`,
    '/login': `Login | ${rcy}`,
    '/officers': `Officers | ${rcy}`,
    '/privacy-policy': `Privacy Policy | ${rcy}`,
    '/register/member': `Register | ${rcy}`,
    '/register/volunteer' : `Register | ${rcy}`,
    '/register/partner' : `Register | ${rcy}`,
    '/register/donor' : `Register | ${rcy}`,
  }

  useEffect(() => {
    const title = routes[location.pathname];
    document.title = title;
  }, [location]);
}

export default Title;