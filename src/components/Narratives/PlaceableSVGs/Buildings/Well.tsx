import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const Well = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBox={viewBox(1283, 273, 17, 229)}
      defaultScale={0.03}
      {...props}
    >
      <path className="Well" d="M1283.3 271.9h17.1v15.5h-17.1z" />
      <path className="Tap" d="M1290.6 287h2.6v215h-2.6z" />
    </PlaceableSVG>
  )
}

export default Well
