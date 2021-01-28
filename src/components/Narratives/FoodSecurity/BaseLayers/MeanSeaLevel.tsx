import React from 'react'

import NarrativeStageProps from '../../../../@types/NarrativeStageProps'

const WIDTH = 700

const MeanSeaLevel = ({ stage }: NarrativeStageProps): JSX.Element => {
  const d =
    stage === 0
      ? `M0 ${WIDTH} H${WIDTH} V315.5 H-${WIDTH}`
      : stage === 1
      ? `M0 ${WIDTH} H${WIDTH} V310 H-${WIDTH}`
      : `M0 ${WIDTH} H${WIDTH} V295 H-${WIDTH}`

  return <path className="mean-sea-level" d={d} />
}

export default MeanSeaLevel
