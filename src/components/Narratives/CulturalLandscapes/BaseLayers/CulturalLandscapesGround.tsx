import React from 'react'

import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const CulturalLandscapesGround = (props: Props): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, -34, 1203.33, 124.91)}
      {...props}
      extraClasses={'CulturalLandscapesGround'}
      defaultScale={1}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="FUTURE_SECTION_CLICK" data-name="FUTURE SECTION CLICK">
          <g id="section_copy_2" data-name="section copy 2">
            <path
              className="cls-1 FillGround"
              d="M935.85,10l67.31,0H1045V69.85l-41.87-.06H957.23a12,12,0,0,1-12-12V31.64h-62V2.76H655l-43.93.39L552.22,4.91,349.39,9.84l-48.07,3.84-46.69,6.79-45.87,2.37L105.9,28.92,4.1,40.09H0v84.82H1202.94l.39-100.9-.07-24h-172.7l-21.8,2.76H935.87"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default CulturalLandscapesGround
