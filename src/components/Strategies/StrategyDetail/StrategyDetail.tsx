import React from 'react'

import { StrategyMainPageGQL } from '../../../@types/StrategyGQL'
import { StrategyPageContext } from '../../../@types/StrategyPageContext'
import StrategyCitations from './StrategyCitations'
import StrategyHowItWorks from './StrategyHowItWorks'
import StrategyItemList from './StrategyItemList'
import StrategyProjects from './StrategyProjects'
import StrategySummary from './StrategySummary'

interface Props {
  citationHTML: string
  data: StrategyMainPageGQL
  pageContext: StrategyPageContext
}

const StrategyDetail = ({
  citationHTML,
  data,
  pageContext
}: Props): JSX.Element => {
  const strategyTypes = data.markdownRemark.frontmatter.strategyTypes

  return (
    <div className="Post">
      <div className="row MoreInfo">
        <StrategySummary
          strategyType={strategyTypes}
          summaryHTML={pageContext.subpages.summary}
        />
        <StrategyHowItWorks images={data.allFile.nodes} />
        <StrategyItemList
          listHTML={pageContext.subpages.types}
          title={`Types of ${data.markdownRemark.frontmatter.title.toLowerCase()}`}
          type={'Types'}
        />
        <StrategyItemList
          iconName={'check'}
          listHTML={pageContext.subpages.benefits}
          title={'Benefits'}
          type={'Benefits'}
        />
        <StrategyItemList
          iconName={'times'}
          listHTML={pageContext.subpages.challenges}
          title={'Challenges'}
          type={'Challenges'}
        />
      </div>
      <div className="BottomBG">
        <StrategyProjects examples={pageContext.subpages.examples} />
      </div>
      <div className="row BottomBG">
        <StrategyCitations citationHTML={citationHTML} />
      </div>
    </div>
  )
}

export default StrategyDetail
