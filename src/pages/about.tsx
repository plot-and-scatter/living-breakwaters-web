import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import BannerRow from '../components/Rows/BannerRow'

import image from '../../content/assets/images/james-wheeler-nP0ILzCrmAc-unsplash.jpg'
import FixTypeLater from '../components/Types/FixTypeLater'

const About = (props: FixTypeLater): JSX.Element => {
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
        About Living Breakwaters
      </BannerRow>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
