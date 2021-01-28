import { graphql } from 'gatsby'
import React from 'react'

import BannerRow from '../components/Rows/BannerRow'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import SitePageProps from '../@types/SitePageProps'

import image from '../../content/assets/images/ben-wicks-g2ballCSr9g-unsplash.jpg'

const CaseStudy = (props: SitePageProps): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Case study" />
      <BannerRow
        bgColorRGB={'rgb(255, 255, 255)'}
        bgOpacity={0.0}
        bgImage={image}
        textDark
      >
        Case study
      </BannerRow>
    </Layout>
  )
}

export default CaseStudy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
