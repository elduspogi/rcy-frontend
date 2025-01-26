import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const location = useLocation();
  const hashes = ['#join-us', '#about', '#partner', '#faqs'];

  useEffect(() => {
    if(hashes.includes(location.hash)) {
      return;
    }

    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default ScrollToTop