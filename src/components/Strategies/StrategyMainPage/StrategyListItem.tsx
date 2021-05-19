import React from 'react'

import { StrategyGQLEdge } from '../../../@types/StrategyGQL'

interface Props {
  strategy: StrategyGQLEdge
}

const StrategyListItem = ({ strategy }: Props): JSX.Element => {
  const strategyType = strategy.node.frontmatter.strategyTypes
  return (
    <div className={`StrategyListItem ${strategyType}BG p-1 mt-1`}>
      <small>{strategy.node.frontmatter.title}</small>
    </div>
  )
}

export default StrategyListItem
