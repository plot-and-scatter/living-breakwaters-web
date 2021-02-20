import React from 'react'

import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const MeanSeaLevel = (props: Props): JSX.Element => {
  const d =
    props.stage === 0
      ? `M0 700 H700 V315.5 H 0`
      : props.stage === 1
      ? `M0 700 H700 V310 H-700`
      : `M0 700 H700 V295 H-700`

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 1960, 520)}
      extraClasses="MeanSeaLevel"
      {...props}
    >
      <path className="mean-sea-level" d={d} />
    </PlaceableSVG>
  )
}

export default MeanSeaLevel
