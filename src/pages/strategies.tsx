import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

// import BannerRow from '../components/Rows/BannerRow'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import StrategyCard from '../components/Strategies/StrategyCard'

import './Strategies.scss'

// import image from '../../content/assets/images/uta-scholl-pUD1P96NB9c-unsplash.jpg'

export const strategyTypes = ['Protect', 'Accommodate']

export const colorForStrategy = (labelName: string): string => {
  switch (labelName) {
    case 'Protect':
      return 'primary'
    case 'Accommodate':
      return 'warning'
    default:
      return 'secondary'
  }
}

const Strategies = (props): JSX.Element => {
  const { data } = props

  const strategies = data.allMarkdownRemark.edges

  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Strategies" />
      {/* <BannerRow
        bgColorRGB={'rgb(255, 255, 255)'}
        bgOpacity={0.0}
        bgImage={image}
        textDark
      >
        Strategies
      </BannerRow> */}
      <h1>Strategies</h1>

      <div className="StrategyCards card-columns">
        {strategies.map((strategyNode, index) => {
          const strategy = strategyNode.node
          return <StrategyCard key={index} strategy={strategy} />
        })}
      </div>
    </Layout>
  )
}

export default Strategies

Strategies.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "strategy" } } }
      sort: { fields: [frontmatter___title], order: ASC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            strategyTypes
            title
            excerpt
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
