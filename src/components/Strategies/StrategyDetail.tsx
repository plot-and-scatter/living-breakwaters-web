import React from 'react'

import FixTypeLater from '../../@types/FixTypeLater'
import HowItWorks from './HowItWorks'
import StrategyGallery from './StrategyGallery'
import StrategyItemList from './StrategyItemList'
import StrategyProjects from './StrategyProjects'
import StrategySummary from './StrategySummary'

interface Props {
  data: FixTypeLater
  frontmatter: FixTypeLater
  pageContext: FixTypeLater
}

const StrategyDetail = ({
  data,
  frontmatter,
  pageContext
}: Props): JSX.Element => {
  const strategyTypes = frontmatter.strategyTypes

  return (
    <div className="Post">
      <div className="row MoreInfo">
        <StrategySummary
          strategyType={strategyTypes}
          summaryHTML={pageContext.subpages.summary}
        />
        <HowItWorks images={data.allFile.nodes} />
        <StrategyItemList
          listHTML={pageContext.subpages.types}
          title={`Types of ${frontmatter.title.toLowerCase()}`}
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

      <div className="row BottomBG">
        <StrategyProjects examples={pageContext.subpages.examples} />
        <StrategyGallery images={pageContext.subpages.images} />
      </div>
    </div>
  )
}

export default StrategyDetail
