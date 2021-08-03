import { graphql } from 'gatsby'
import React from 'react'

import BannerRow from '../components/Rows/BannerRow'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import SitePageProps from '../../src/@types/SitePageProps'

import image from '../../content/assets/images/ben-wicks-g2ballCSr9g-unsplash.jpg'

const Contact = (props: SitePageProps): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Contact" />
      <BannerRow
        bgColorRGB={'rgb(255, 255, 255)'}
        bgOpacity={0.0}
        bgImage={image}
        textDark
      >
        Contact
      </BannerRow>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
