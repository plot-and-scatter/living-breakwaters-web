import React from 'react'

import './FoodSecuritySeaLevel.scss'

const FoodSecuritySeaLevel = (): JSX.Element => {
  return (
    <g className="FoodSecuritySeaLevel">
      {/* <path className="storm-surge" d={dStormSurge} /> */}
      {/* <path className="higher-sea-level" d={d} /> */}
      <path className="base-sea-level" d={`M0 246 h2000 v40 H-2000`} />
    </g>
  )
}

export default FoodSecuritySeaLevel
