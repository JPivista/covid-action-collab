import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'
import AllMedia from './AllMedia'
import MediaBanner from './MediaBanner'

import SchemaComponents from '../SeoComponents/SchemaComponents'
import SEO from '../../components/SeoComponents/Seo'

const title = 'Unveiling the Power of Media Measurement and Impact. '
const url = 'https://covidactioncollab.org/media_new/'
const desc = 'Explore the significant contributions of COVIDActionCollab and its members in measuring accomplishments and instilling belief through their collaborative endeavors.'
const banner = '/media/media_banner.jpg'

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
            <MediaBanner />
            <AllMedia />
        <Footer />
    </>
  )
}

export default index