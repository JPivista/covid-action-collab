'use client'
import React from 'react'
import Header from '../SharedComponents/Header'
import HeroBanner from './HeroBanner'

import '../StyleComponents'
import OurAction from './OurAction'
import ImpactStories from './ImpactStories'
import OurImpact from './OurImpact'
import Footer from '../SharedComponents/Footer/'
import SchemaComponents from '../SeoComponents/SchemaComponents'
import SEO from '../../components/SeoComponents/Seo'

const title = 'Fostering resilience through community collaboration and resource partnerships.'
const url = 'https://covidactioncollab.org/'
const desc = 'Join the COVID action collab to create a resilient community movement titled BOUNCE FORWARD, where we will bounce back stronger and go forward together.'
const banner = '/home_hero_banner.jpg'

const index = () => {

  return (
    <>
      <SEO
        title={title}
        description={desc}
        path={url}
        metaImage={banner}
      />
      <SchemaComponents
        type="website"
        target={url}
        published_date=""
      />



      <Header />
      <HeroBanner />
      <OurAction />
      <ImpactStories />
      <OurImpact />
      <Footer />
    </>
  )
}

export default index