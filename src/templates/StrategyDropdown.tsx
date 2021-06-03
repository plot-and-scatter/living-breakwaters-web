import { Link } from 'gatsby'
import React from 'react'

import { colorForStrategy } from '../pages/strategies'
import { StrategyGQLEdge } from '../@types/StrategyGQL'
import { StrategyType } from '../@types/StrategyType'

interface Props {
  active?: boolean
  label: StrategyType
  strategies: StrategyGQLEdge[]
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
        className={`btn btn-sm dropdown-toggle btn-${colorClass}`}
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
