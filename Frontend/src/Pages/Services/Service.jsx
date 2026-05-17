import React from 'react'
import GetInTouch from '../../Components/GetInTouch'
import ServiceIntro from './ServiceIntro'
import ServiceHero from './ServiceHero'
import ServiceTM from './ServiceTM'
import ServiceListing from './ServiceListing'

const Service = () => {
  return (
    <>
    <ServiceHero/>
    <ServiceIntro/>
    <ServiceTM/>
    <ServiceListing/>
    <GetInTouch/>
    </>
  )
}

export default Service