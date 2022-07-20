import React from 'react'

import './StrategyCitations.scss'

interface Props {
  citationHTML: string
}

const StrategyCitations = ({ citationHTML }: Props): JSX.Element => {
  return (
    <div className="col Images">
      <h2>
        <i className="fas fa-book mr-2 py-5"></i> Citations
      </h2>
      <div dangerouslySetInnerHTML={{ __html: citationHTML }} />
    </div>
  )
}

export default StrategyCitations
