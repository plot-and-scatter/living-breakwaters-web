import React from 'react'

import NarrativeStageProps from '../../../../@types/NarrativeStageProps'

const WIDTH = 2000
const BASE_HEIGHT = 85

const FoodSecuritySeaLevel = ({ stage }: NarrativeStageProps): JSX.Element => {
  const d =
    stage === 0
      ? `M0 ${WIDTH / 5} H${WIDTH / 5} V${BASE_HEIGHT + 20} H-${WIDTH / 5}`
      : `M0 ${WIDTH / 5} H${WIDTH / 5} V${BASE_HEIGHT + 10} H-${WIDTH / 5}`

  const dStormSurge =
    stage < 3 ? `M0 110 h500 v50 h-500` : `M0 80 h2000 v50 h-2000`

  return (
    <>
      <path className="storm-surge" d={dStormSurge} />
      <path className="higher-sea-level" d={d} />
      <path
        className="base-sea-level"
        d={`M0 ${WIDTH} H${WIDTH} V${BASE_HEIGHT + 20} H-${WIDTH}`}
      />
    </>
  )
}

export default FoodSecuritySeaLevel
