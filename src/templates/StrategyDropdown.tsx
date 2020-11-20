import { Link, graphql } from 'gatsby'
import React from 'react'
import { colorForStrategy } from '../pages/strategies'

interface Props {
  active?: boolean
  label: string
  strategies: any[]
}

const StrategyDropdown = ({
  active,
  label,
  strategies
}: Props): JSX.Element => {
  const colorClass = active ? colorForStrategy(label) : 'secondary'
  return (
    <div className="StrategyDropdown dropdown mr-3">
      <button
        className={`btn dropdown-toggle btn-${colorClass}`}
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{ color: 'white' }}
      >
        {label}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {strategies.map((strategyNode, index) => {
          const strategy = strategyNode.node
          return (
            <Link
              key={index}
              className="dropdown-item"
              to={strategy.fields.slug}
            >
              {strategy.frontmatter.title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default StrategyDropdown

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
