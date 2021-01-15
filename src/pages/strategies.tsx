import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'

import { FixTypeLater } from '../components/Types/FixTypeLater'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import StrategyCard from '../components/Strategies/StrategyCard'

import './Strategies.scss'

export const strategyTypes = ['Protect', 'Accommodate', 'Retreat']

export const colorForStrategy = (labelName: string): string => {
  switch (labelName) {
    case 'Protect':
      return 'primary'
    case 'Accommodate':
      return 'warning'
    case 'Retreat':
      return 'danger'
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
      <div className="row my-4 align-items-center">
        <div className="col-6">
          <h1 className="mb-0">Strategies</h1>
        </div>
        <div className="col-6 text-right">
          <div className="d-flex justify-content-end align-items-center">
            <h5 className="text-muted mr-3 mb-0">Show strategies:</h5>
            {strategyTypes.map((strategyType) => {
              const color = colorForStrategy(strategyType)
              return (
                <div
                  key={strategyType}
                  className={`py-1 px-2 form-check form-check-inline border border-${color} text-${color}`}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`InlineCheckbox-${strategyType}`}
                    value={strategyType}
                    onChange={checkboxCallback}
                    defaultChecked={filters.includes(strategyType)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`InlineCheckbox-${strategyType}`}
                  >
                    {strategyType}
                  </label>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="StrategyCards card-columns">
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
