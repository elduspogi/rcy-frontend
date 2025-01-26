import Hero from '../../components/main/Hero'
import About from '../../components/main/About'
import Officers from '../../components/main/Officers'
import Volunteer from '../../components/main/Volunteer'
import DonateBlood from '../../components/main/DonateBlood'
import Faqs from '../../components/main/Faqs'
import Partners from '../../components/main/Partners'
import MainLayout from '../../layout/MainLayout'

const LandingPage = () => {
  return (
    <>
      <MainLayout 
        children={
          <>
            <Hero />
            <About />
            <Officers />
            <Volunteer />
            <DonateBlood />
            <Partners />
            <Faqs />
          </>
        }
      />
    </>
  )
}

export default LandingPage