import Navbar from '../../components/main/Navbar'
import Hero from '../../components/main/Hero';
import About from '../../components/main/About';
import Officers from '../../components/main/Officers';
import Volunteer from '../../components/main/Volunteer';
import ArrowTop from '../../components/main/ArrowTop';
import DonateBlood from '../../components/main/DonateBlood';
import Footer from '../../components/main/Footer';
import Faqs from '../../components/main/Faqs';
import Partners from '../../components/main/Partners';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Officers />
      <Volunteer />
      <DonateBlood />
      <Partners />
      <Faqs />
      
      <Footer />
      {/* Keep this bottom */}
      <ArrowTop />
    </>
  )
}

export default LandingPage