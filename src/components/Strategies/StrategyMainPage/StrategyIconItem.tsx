import { Link } from 'gatsby'
import React from 'react'

import { StrategyGQLEdge } from '../../../@types/StrategyGQL'

import './StrategyIconItem.scss'

interface Props {
  strategy: StrategyGQLEdge
}

const StrategyIconItem = ({ strategy }: Props): JSX.Element => {
  const strategyType = strategy.node.frontmatter.strategyTypes

  const slug = strategy?.node?.fields?.slug

  if (!slug) return <></>

  const slugWithoutTrailingSlash = slug.substring(0, slug.length - 1)

  const iconPath = `${slugWithoutTrailingSlash}.svg`

  return (
    <div className={`col-6 col-sm-4 StrategyIconItem mb-4`}>
      <Link to={slug}>
        <div className={`${strategyType}Item p-2 h-100 d-flex `}>
          <div className="Title">
            <p>{strategy.node.frontmatter.title}</p>
          </div>
          <div className="text-center">
            <img src={iconPath} />
          </div>
          <div className="text-center hidden Action">
            Learn more&nbsp;
            <i className="fas fa-arrow-right mt-2" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default StrategyIconItem
