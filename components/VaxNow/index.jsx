import React from 'react'

import Header from '../SharedComponents/Header'
import VaxNowBanner from './VaxNowBanner'

import '../StyleComponents'
import Footer from '../SharedComponents/Footer/Footer'

import SchemaComponents from '../SeoComponents/SchemaComponents'
import SEO from '../../components/SeoComponents/Seo'

const title = "Participate in VAXNOW's mission of rapid and inclusive vaccination."
const url = 'https://covidactioncollab.org/vaxnow/'
const desc = 'Resolve vaccine hesitancy and reach more people with VAXNOW, an initiative focused on vaccinating vulnerable populations quickly.'
const banner = '/vaxnow/vaxnow_banner.png'

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
            <VaxNowBanner />
          <Footer />
    </>


  )
}

export default index