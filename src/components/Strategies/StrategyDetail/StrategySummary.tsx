import React from 'react'

import './StrategySummary.scss'

interface Props {
  strategyType: string
  summaryHTML: string
}

const StrategySummary = ({ strategyType, summaryHTML }: Props): JSX.Element => {
  return (
    <div className={`StrategySummary col col-4 ${strategyType}BG`}>
      <div dangerouslySetInnerHTML={{ __html: summaryHTML }} />
    </div>
  )
}

export default StrategySummary
