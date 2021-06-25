import React from 'react'

import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const UtilitySystemsGround = (props: Props): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(5, -25, 1198, 141.64)}
      {...props}
      extraClasses={'UtilitySystemsGround'}
      defaultScale={1}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_SECTION">
          <g id="section">
            <polygon
              className="cls-1 FillGround"
              points="0 65.1 125.83 51.45 283.48 35.26 283.48 35.26 311.33 26.32 341.3 26.68 352.04 28.11 393.62 27.93 565.13 27.93 718.05 18.41 871.9 17.94 909.56 17.83 936.15 17.37 1089.41 1.16 1203.33 0 1202.94 141.63 0 141.63 0 65.1"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default UtilitySystemsGround
