
import React from 'react'
import OnwardTogetherBanner from './OnwardTogetherBanner'
import JourneySection from './JourneySection'
import Corousel from './corousel'
import ThePhotoGrapher from './PhotoGraphers'
import TheCurators from './TheCurators'
import ContactUs from './contactus'
import Contact from './Contact'

import SEO from '../../components/SeoComponents/Seo'
import SchemaComponents from '../SeoComponents/SchemaComponents'


const title = "Inspiring Stories: COVIDActionCollab's Partnerships Empowering Marginalised Communities."
const url = 'https://covidactioncollab.org/onwardtogether/'
const desc = "Explore Onward Together: a captivating journey of COVIDActionCollab's resilience, strategic partnerships, and initiatives empowering marginalized communities post-pandemic."
const banner = '/onward_banner.png'


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

      <OnwardTogetherBanner />
      <JourneySection />
      <Corousel />
      <ThePhotoGrapher />
      <TheCurators />
      <ContactUs />


    </>
  )
}

export default index
