import React from 'react'

import Header from '../SharedComponents/Header/'
import Footer from '../SharedComponents/Footer'

import InvestImpactTab from './InvestImpactTab'
import InvestImpactBanner from './InvestImpactBanner'

import SchemaComponents from '../SeoComponents/SchemaComponents'
import SEO from '../../components/SeoComponents/Seo'

const title = 'Join INVEST FOR IMPACT: Build resilient communities invest in Covid-19 recovery.'
const url = 'https://covidactioncollab.org/invest-for-impact/'
const desc = "Join INVEST FOR IMPACT in our collaborative approach to build resilient communities. Explore investment opportunities to help communities 'bounce forward' during Covid-19. "
const banner = '/invest_impact/invest_impact_banner.jpg'

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
      <InvestImpactBanner />
      <InvestImpactTab />
      <Footer />
    </>
  )
}

export default index