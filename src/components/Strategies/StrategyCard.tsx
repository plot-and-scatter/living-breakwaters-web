import { Link } from 'gatsby'
import React from 'react'

import { colorForStrategy } from '../../pages/strategies'
import FixTypeLater from '../../@types/FixTypeLater'

import './StrategyCard.scss'

interface Props {
  strategy: FixTypeLater
}

const StrategyCard = ({ strategy }: Props): JSX.Element => {
  console.log('strategy', strategy)
  const strategyType = strategy.frontmatter.strategyTypes
  const color = colorForStrategy(strategyType)
  return (
    <div className={`StrategyCard card border-${color}`}>
      <div className={`d-flex card-header bg-${color}`}>
        <Link to={strategy.fields.slug} style={{ color: 'white' }}>
          <h5 className="mb-0">{strategy.frontmatter.title}</h5>
          <h6 className="mb-0">
            <small>{strategyType}</small>
          </h6>
        </Link>
      </div>
      <div className="card-body">
        <p>{strategy.frontmatter.excerpt}</p>
        <p className="mb-0 text-right">
          <Link
            to={strategy.fields.slug}
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
