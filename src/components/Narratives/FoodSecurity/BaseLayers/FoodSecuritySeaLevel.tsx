import React from 'react'

import NarrativeStageProps from '../../../../@types/NarrativeStageProps'

const WIDTH = 2000
const BASE_HEIGHT = 85

const FoodSecuritySeaLevel = ({ stage }: NarrativeStageProps): JSX.Element => {
  const d =
    stage === 0
      ? `M0 ${WIDTH} H${WIDTH} V${BASE_HEIGHT + 20} H-${WIDTH}`
      : stage === 1
      ? `M0 ${WIDTH} H${WIDTH} V${BASE_HEIGHT + 15} H-${WIDTH}`
      : `M0 ${WIDTH} H${WIDTH} V${BASE_HEIGHT + 5} H-${WIDTH}`

  return (
    <>
      <path className="higher-sea-level" d={d} />
      <path
        className="base-sea-level"
        d={`M0 ${WIDTH} H${WIDTH} V${BASE_HEIGHT + 20} H-${WIDTH}`}
      />
    </>
  )
}

export default FoodSecuritySeaLevel
