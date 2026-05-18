import React from 'react'
import HomeHero from './HomeHero'
import HomeExperience from './HomeExperience'
import HomeServices from './HomeServices'
import GetInTouch from '../../Components/GetInTouch'
import HowItWorks from './HowItWorks'
import CertificationAndPermits from './CertificationAndPermits'
import Membership from './Membership'
import HomeClients from './HomeClients'
import ServiceListing from '../Services/ServiceListing'

const Home = () => {
  return (
    <>
    <HomeHero/>
    <HomeExperience/>
    <ServiceListing/>
    {/* <HomeServices/> */}
    <HowItWorks/>
    <CertificationAndPermits/>
    <Membership/>
    <HomeClients/>
    <GetInTouch/>
    </>
  )
}

export default Home