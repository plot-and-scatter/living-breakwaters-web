import { Link, graphql } from 'gatsby'
import React from 'react'
import { strategyTypes } from '../pages/strategies'
import StrategyDropdown from './StrategyDropdown'

import './StrategySelect.scss'

interface Props {
  currentPost: any
  strategies: any[]
}

const StrategySelect = ({ currentPost, strategies }: Props): JSX.Element => {
  console.log('strategies', strategies)
  console.log(currentPost)

  return (
    <div className="StrategySelect d-flex">
      {strategyTypes.map((strategyType, index) => {
        const filteredStrategies = strategies.filter(
          (s) => s.node.frontmatter.strategyTypes === strategyType
        )
        return (
          <StrategyDropdown
            active={currentPost.frontmatter.strategyTypes === strategyType}
            key={index}
            label={strategyType}
            strategies={filteredStrategies}
          />
        )
      })}
    </div>
  )
}

export default StrategySelect

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
          }
        }
      }
    }
  }
`
