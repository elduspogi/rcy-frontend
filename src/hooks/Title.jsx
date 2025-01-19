import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Title = () => {
  const location = useLocation();

  const routes = {
    '/': 'Red Cross Youth - City of San Pedro',
    '/login': 'Login | Red Cross Youth - City of San Pedro'
  }

  useEffect(() => {
    const title = routes[location.pathname];
    document.title = title;
  }, [location]);
}

export default Title;