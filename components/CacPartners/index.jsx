import React from 'react'

import Header from '../SharedComponents/Header'

import '../StyleComponents'
import HeroBannerCacPartners from './HeroBannerCacPartners'
import CacPartnersGallery from './CacPartnersGallery'
import Footer from '../SharedComponents/Footer/Footer'

import SchemaComponents from '../SeoComponents/SchemaComponents'
import SEO from '../../components/SeoComponents/Seo'

const title = 'A Comprehensive Guide for Real Collective Collaboration with Partners. '
const url = 'https://covidactioncollab.org/cac-partners/'
const desc = 'In a true Collaborative the lines between the partners and the collaborative fade. We become our partners we are 300 partners strong and growing.'
const banner = '/cac_partners/cac_partners_banners.jpg'

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
          <HeroBannerCacPartners />
          <CacPartnersGallery />
        <Footer />
    </>
  )
}

export default index