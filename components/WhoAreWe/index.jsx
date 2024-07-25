import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'

import '../StyleComponents'
import WhoAreWeBanner from './WhoAreWeBanner'
import ContentWhoWeAre from './ContentWhoWeAre'
import OurTeam from './OurTeam'

import SchemaComponents from '../SeoComponents/SchemaComponents'
import SEO from '../../components/SeoComponents/Seo'

const title = 'Action for Better Development in the Future Working Together for Change in Civil Society.'
const url = 'https://covidactioncollab.org/who-we-are/'
const desc = 'Our Governing Council, comprised of experienced individuals from diverse backgrounds, provides a stabilizing force to our collaborative efforts, ensuring speed remains central to our approach.'
const banner = '/who_are_we/who_are_we_banner.jpg'

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
          <WhoAreWeBanner />
          <ContentWhoWeAre />
          <OurTeam />
        <Footer />
    </>
  )
}

export default index