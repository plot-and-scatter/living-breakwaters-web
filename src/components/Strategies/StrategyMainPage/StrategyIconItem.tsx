import { Link } from 'gatsby'
import React from 'react'

import { StrategyGQLEdge } from '../../../@types/StrategyGQL'

import './StrategyIconItem.scss'

interface Props {
  strategy: StrategyGQLEdge
}

const StrategyIconItem = ({ strategy }: Props): JSX.Element => {
  const strategyType = strategy.node.frontmatter.strategyTypes
  return (
    <div className={`col-3 StrategyIconItem mb-4`}>
      <Link to={strategy.node.fields.slug}>
        <div className={`${strategyType}BG p-2 h-100`}>
          <p>
            <small>{strategy.node.frontmatter.title}</small>
          </p>
          <div className="text-center">
            <i className="fas fa-island-tropical fa-4x" />
          </div>

          <i className="fas fa-arrow-right hidden" />
        </div>
      </Link>
    </div>
  )
}

export default StrategyIconItem
