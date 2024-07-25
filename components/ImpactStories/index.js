import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'

import '../StyleComponents'
import ImpactStoriesBanner from './ImpactStoriesBanner'
import ImpactStoriesTap from './ImpactStoriesTap'

import SchemaComponents from '../SeoComponents/SchemaComponents'
import SEO from '../../components/SeoComponents/Seo'

const title = 'Providing Impact Stories with Their Appropriate Power Down to the Ground. '
const url = 'https://covidactioncollab.org/impact-stories/'
const desc = 'Discover the power of real-world impact with our website, where we believe that the best impact is felt on the ground.'
const banner = '/impact_stories/impact_stories_banner.jpg'

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
            <ImpactStoriesBanner />
            <ImpactStoriesTap />
            <Footer />
        </>
    )
}

export default index