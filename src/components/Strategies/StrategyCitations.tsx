import React from 'react'

import FixTypeLater from '../../@types/FixTypeLater'

import './StrategyCitations.scss'

interface Props {
  citationHTML: FixTypeLater
}

const StrategyCitations = ({ citationHTML }: Props): JSX.Element => {
  return (
    <div className="Citations my-5">
      <h2>Citations</h2>
      <div dangerouslySetInnerHTML={{ __html: citationHTML }} />
    </div>
  )
}

export default StrategyCitations
