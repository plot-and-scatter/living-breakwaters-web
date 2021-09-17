import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'

import { StrategyGQLEdge } from '../@types/StrategyGQL'
import { StrategyType } from '../@types/StrategyType'
import ALink from '../components/Layout/ALink'
import FixTypeLater from '../@types/FixTypeLater'
import Header from '../components/Layout/Header'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import StrategyCard from '../components/Strategies/StrategyMainPage/StrategyCard'
import StrategyDescription from '../components/Strategies/StrategyMainPage/StrategyDescription'
import StrategyFilter from '../components/Strategies/StrategyMainPage/StrategyFilter'
import Subhead from '../components/Layout/Subhead'
import Title from '../components/Layout/Title'

import './Strategies.scss'

export const colorForStrategy = (strategy: StrategyType): string => {
  switch (strategy) {
    case StrategyType.Protect:
      return 'primary'
    case StrategyType.Accommodate:
      return 'warning'
    case StrategyType.Retreat:
      return 'danger'
    case StrategyType.Avoid:
      return 'info'
    default:
      return 'secondary'
  }
}

const Strategies = (props: FixTypeLater): JSX.Element => {
  const { data } = props

  const themes: StrategyGQLEdge[] = data.allMarkdownRemark.edges

  console.log('themes', themes)

  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout title={siteTitle}>
      <SEO title="Themes" />
      <Header>
        <Title headingGroup="Themes" />
      </Header>
      <div className="row mt-5">
        <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <p className="lead">Themes intro text.</p>
        </div>
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
      filter: { frontmatter: { contentType: { eq: "theme" } } }
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
