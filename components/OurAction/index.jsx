import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'

import OurActionBanner from './OurActionBanner'
import OurActionTap from './OurActionTap'

import SchemaComponents from '../SeoComponents/SchemaComponents'
import SEO from '../../components/SeoComponents/Seo'

const title = 'Addressing Immediate Needs with Our Adaptive Action Approach. '
const url = 'https://covidactioncollab.org/our-action/'
const desc = "Our Action Framework leverages every resource to support the community's wellbeing and instill resilience."
const banner = '/our_action/our_action_banner.jpg'

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
          <OurActionBanner />
          <OurActionTap />
        <Footer />
    </>
  )
}

export default index