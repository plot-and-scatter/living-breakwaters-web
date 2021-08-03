import React from 'react'
import FixTypeLater from '../../../@types/FixTypeLater'

interface Props {
  iconName?: string
  listHTML: FixTypeLater
  title: string
  type: string
}

const StrategyItemList = ({
  iconName,
  listHTML,
  title,
  type
}: Props): JSX.Element => {
  return (
    <div className={`col col-4 ${type}`}>
      <h2>
        {iconName && <i className={`fas fa-${iconName} mr-2`} />}
        {title}
      </h2>
      <div
        dangerouslySetInnerHTML={{
          __html: listHTML
        }}
      />
    </div>
  )
}

export default StrategyItemList
