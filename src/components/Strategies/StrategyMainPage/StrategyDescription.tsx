import React, { useMemo } from 'react'

import { StrategyGQLEdge } from '../../../@types/StrategyGQL'
import { StrategyType } from '../../../@types/StrategyType'
import Subhead from '../../Layout/Subhead'
import StrategyIconItem from './StrategyIconItem'
import StrategyListItem from './StrategyListItem'

interface Props {
  strategyType: StrategyType
  children: React.ReactNode
  strategies: StrategyGQLEdge[]
}

const StrategyDescription = ({
  strategies,
  strategyType,
  children
}: Props): JSX.Element => {
  const relevantStrategies = useMemo(
    () =>
      strategies.filter(
        (s) => s.node.frontmatter.strategyTypes === strategyType
      ),
    [strategies, strategyType]
  )

  return (
    // <div className="StrategyDescription col-12 col-sm-11 offset-sm-0 col-md-10 col-lg-8 offset-lg-1">
    <div className="StrategyDescription col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <div className="row">
        {/* <div className="col-4 col-md-3">
          {relevantStrategies.map((strategy, i) => (
            <StrategyListItem strategy={strategy} key={i} />
          ))}
        </div> */}
        <div className="col-12">
          {' '}
          <Subhead level={2}>{strategyType}</Subhead>
          {children}
        </div>
        <div className="col-12 mb-5">
          <div className="row Highlight">
            {relevantStrategies.map((strategy, i) => (
              <StrategyIconItem strategy={strategy} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StrategyDescription
