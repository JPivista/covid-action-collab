import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'

import SchemaComponents from '../SeoComponents/SchemaComponents'
import SEO from '../../components/SeoComponents/Seo'

import '../StyleComponents'
import CacBanner from './CacBanner'

const title = 'Building Community Resilience Strategies for Response Recovery and Growth'
const url = 'https://covidactioncollab.org/what-is-cac/'
const desc = 'Strengthening communities in need: Join our all-India collaborative to maximize resources and build resilience in vulnerable populations.'
const banner = '/what_is_cac/what_is_cac_banner.jpg'

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
          <CacBanner />
        <Footer />
    </>
  )
}

export default index