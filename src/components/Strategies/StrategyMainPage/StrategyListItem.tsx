import { Link } from 'gatsby'
import React from 'react'

import { StrategyGQLEdge } from '../../../@types/StrategyGQL'

import './StrategyListItem.scss'

interface Props {
  strategy: StrategyGQLEdge
}

const StrategyListItem = ({ strategy }: Props): JSX.Element => {
  const strategyType = strategy.node.frontmatter.strategyTypes
  return (
    <div className={`StrategyListItem ${strategyType}BG p-1 mt-1`}>
      <Link to={strategy.node.fields.slug}>
        <div className="d-flex align-items-center justify-content-between">
          <small>{strategy.node.frontmatter.title}</small>
          <i className="fas fa-arrow-right hidden" />
        </div>
      </Link>
    </div>
  )
}

export default StrategyListItem
