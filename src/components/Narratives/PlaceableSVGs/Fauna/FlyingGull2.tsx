import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const FlyingGull2 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(-3.5, -2.6, 4.05, 3.8)}
      defaultScale={0.05}
      {...props}
    >
      <path d="M0 0h.3a1 1 0 01-.3 1 .5.5 0 01-.8 0l.2-.4h-.2l-2.2.6h-.5l2.2-1a2.2 2.2 0 001-1l.8-1.8c.2 1-.3 1.7-.5 2.6z" />
    </PlaceableSVG>
  )
}

export default FlyingGull2
