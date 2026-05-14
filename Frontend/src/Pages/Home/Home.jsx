import React from 'react'
import HomeHero from './HomeHero'
import HomeExperience from './HomeExperience'
import HomeServices from './HomeServices'
import GetInTouch from '../../Components/GetInTouch'
import HowItWorks from './HowItWorks'
import CertificationAndPermits from './CertificationAndPermits'
import Membership from './Membership'
import HomeClients from './HomeClients'

const Home = () => {
  return (
    <>
    <HomeHero/>
    <HomeExperience/>
    <HomeServices/>
    <HowItWorks/>
    <CertificationAndPermits/>
    <Membership/>
    <HomeClients/>
    <GetInTouch/>
    </>
  )
}

export default Home