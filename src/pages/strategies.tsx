import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'

import FixTypeLater from '../@types/FixTypeLater'
import Header from '../components/Layout/Header'
import Layout from '../components/Layout/Layout'
import Title from '../components/Layout/Title'
import SEO from '../components/SEO'
import StrategyCard from '../components/Strategies/StrategyCard'
import StrategyFilter from '../components/Strategies/StrategyFilter'

import './Strategies.scss'

export const strategyTypes = ['Protect', 'Accommodate', 'Retreat', 'Avoid']

export const colorForStrategy = (labelName: string): string => {
  switch (labelName) {
    case 'Protect':
      return 'primary'
    case 'Accommodate':
      return 'warning'
    case 'Retreat':
      return 'danger'
    case 'Avoid':
      return 'info'
    default:
      return 'secondary'
  }
}

const Strategies = (props: FixTypeLater): JSX.Element => {
  const { data } = props

  const strategies = data.allMarkdownRemark.edges

  const [filters, setFilters] = useState<FixTypeLater[]>([...strategyTypes])

  const filteredStrategies = strategies.filter((strategyNode) =>
    filters.includes(strategyNode.node.frontmatter.strategyTypes)
  )

  const checkboxCallback = useCallback(
    (event) => {
      const newFilters = [...filters]
      const value = event.target.value
      if (event.target.checked) {
        newFilters.push(value)
      } else {
        const indexOfItem = newFilters.indexOf(value)
        newFilters.splice(indexOfItem, 1)
      }
      setFilters(newFilters)
    },
    [filters]
  )

  useEffect(() => {
    console.log(filters)
  }, [filters])

  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Strategies" />
      <Header>
        <Title headingGroup="Strategies" />
        <StrategyFilter checkboxCallback={checkboxCallback} filters={filters} />
      </Header>
      <div className="StrategyCards card-columns mt-3">
        {filteredStrategies.map((strategyNode, index) => {
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
