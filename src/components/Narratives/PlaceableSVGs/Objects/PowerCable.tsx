import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

// import './PowerCable.scss'

const PowerCable = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 945, 180)}
      defaultScale={0.3}
      extraClasses="PowerCable"
      {...props}
    >
     <g clip-path="url(#clip-path)"><g clip-path="url(#clip-path-2)"><g class="cls-4"><path class="cls-5" d="M1 177.64h170.68l11.41-11.41h224.52l15.38-15.38H620.07L846.8 1h100.42"/></g></g></g>

    </PlaceableSVG>
  )
}

export default PowerCable
