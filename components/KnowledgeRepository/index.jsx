import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'

import KnowledgeRepoBanner from './KnowledgeRepoBanner'
import KnowledgeRepoSlider from './KnowledgeRepoSlider'

import '../StyleComponents'
import KnowledgeTap from './KnowledgeTap'

import SchemaComponents from '../SeoComponents/SchemaComponents'
import SEO from '../../components/SeoComponents/Seo'

const title = 'Enhancing COVID-19 Response Activities with Knowledge Repository Insights.'
const url = 'https://covidactioncollab.org/knowledge-repository/'
const desc = 'Elevate your impact in the fight against COVID-19 with our carefully curated resources for health service providers, front-line workers, and the community.'
const banner = '/knowledge_repo/knwoledge_repo_banner.jpg'

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
        <KnowledgeRepoBanner />
        <KnowledgeRepoSlider />
        <KnowledgeTap />
      <Footer />
    </>
  )
}

export default index