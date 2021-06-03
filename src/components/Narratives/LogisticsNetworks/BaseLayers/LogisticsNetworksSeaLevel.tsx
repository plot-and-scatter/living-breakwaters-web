import React from 'react'

import NarrativeStageProps from '../../../../@types/NarrativeStageProps'

const WIDTH = 2000
const BASE_HEIGHT = 30

const LogisticsNetworksSeaLevel = ({
  stage
}: NarrativeStageProps): JSX.Element => {
  console.log('stage', stage)

  const d =
    stage === 0
      ? `M0 ${WIDTH} H${WIDTH} V${BASE_HEIGHT + 20.5} H-${WIDTH}`
      : stage === 1
      ? `M0 ${WIDTH} H${WIDTH} V${BASE_HEIGHT + 15} H-${WIDTH}`
      : `M0 ${WIDTH} H${WIDTH} V${BASE_HEIGHT} H-${WIDTH}`

  return <path className="mean-sea-level" d={d} />
}

export default LogisticsNetworksSeaLevel
