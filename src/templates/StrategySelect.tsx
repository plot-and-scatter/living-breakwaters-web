import React from 'react'

import { StrategyGQLEdge, StrategyGQLNode } from '../@types/StrategyGQL'
import { StrategyType } from '../@types/StrategyType'
import StrategyDropdown from './StrategyDropdown'

import './StrategySelect.scss'

interface Props {
  currentPost: StrategyGQLNode
  strategies: StrategyGQLEdge[]
}

{
  /* <li className="nav-item dropdown">
<a
  className="nav-link dropdown-toggle"
  href="#"
  id="navbarDropdownMenuLink"
  data-toggle="dropdown"
  aria-haspopup="true"
  aria-expanded="false"
>
  Case Studies
</a> */
}

const StrategySelect = ({ currentPost, strategies }: Props): JSX.Element => (
  <div className="text-right">
    {Object.values(StrategyType).map((strategyType, index) => {
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

export default StrategySelect
