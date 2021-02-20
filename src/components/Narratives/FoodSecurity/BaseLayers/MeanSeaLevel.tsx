import React from 'react'

import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'

const WIDTH = 700

interface Props {
  stage: number
}

const MeanSeaLevel = (props: Props): JSX.Element => {
  const d =
    props.stage === 0
      ? `M0 ${WIDTH} H${WIDTH} V315.5 H 0`
      : props.stage === 1
      ? `M0 ${WIDTH} H${WIDTH} V310 H-${WIDTH}`
      : `M0 ${WIDTH} H${WIDTH} V295 H-${WIDTH}`

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 1960, 520)}
      extraClasses="MeanSeaLevel"
    >
      <path className="mean-sea-level" d={d} />
    </PlaceableSVG>
  )
}

export default MeanSeaLevel
