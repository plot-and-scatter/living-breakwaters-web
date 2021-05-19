import { Link } from 'gatsby'
import React from 'react'

import { colorForStrategy } from '../../pages/strategies'
import { StrategyGQLEdge } from '../../@types/StrategyGQL'

import './StrategyCard.scss'

interface Props {
  strategy: StrategyGQLEdge
}

const StrategyCard = ({ strategy }: Props): JSX.Element => {
  const strategyType = strategy.node.frontmatter.strategyTypes
  const color = colorForStrategy(strategyType)
  return (
    <div className={`StrategyCard card border-${color}`}>
      <div className={`d-flex card-header bg-${color}`}>
        <Link to={strategy.node.fields.slug} style={{ color: 'white' }}>
          <h5 className="mb-0">{strategy.node.frontmatter.title}</h5>
          <h6 className="mb-0">
            <small>{strategyType}</small>
          </h6>
        </Link>
      </div>
      <div className="card-body">
        <p>{strategy.node.frontmatter.excerpt}</p>
        <p className="mb-0 text-right">
          <Link
            to={strategy.node.fields.slug}
            className={`btn btn-sm btn-outline-${color}`}
          >
            Learn more &rarr;
          </Link>
        </p>
      </div>
    </div>
  )
}

export default StrategyCard
