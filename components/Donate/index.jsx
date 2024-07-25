import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'

import DonateBanner from './DonateBanner'
import DoanteTap from './DoanteTap'

import SchemaComponents from '../SeoComponents/SchemaComponents'
import SEO from '../../components/SeoComponents/Seo'

const title = 'Join Our Global Efforts: Donate to Support COVID-19 Frontline Heroes.'
const url = 'https://covidactioncollab.org/donate/'
const desc = "Support our carefully chosen initiatives for COVID-19 frontline heroes by making a donation and uniting with us to make a global impact. Together, we can overcome this crisis. "
const banner = '/donate/donate_banner.jpg'

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
      <DonateBanner />
      <DoanteTap />
      <Footer />
    </>
  )
}

export default index