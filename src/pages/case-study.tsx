import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import BannerRow from '../components/Rows/BannerRow'

import image from '../../content/assets/images/ben-wicks-g2ballCSr9g-unsplash.jpg'

class CaseStudy extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
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
}

export default CaseStudy

CaseStudy.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
