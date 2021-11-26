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
    <div className="btn-group">
      <button
        type="button"
        className={`btn btn-${colorClass} dropdown-toggle ml-3`}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {label}
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        {strategies.map((s) => (
          <Link
            key={s.node.fields.slug}
            className="dropdown-item"
            to={s.node.fields.slug}
          >
            {s.node.frontmatter.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default StrategyDropdown
