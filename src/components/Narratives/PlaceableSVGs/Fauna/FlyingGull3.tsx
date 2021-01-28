import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const FlyingGull3 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBox={viewBox(-3.4, -3.5, 5.1, 4.5)}
      defaultScale={0.05}
      {...props}
    >
      <path d="M0 0h.9c-.2.7-.4 1-1 1a.6.6 0 01-.5-.3 2.3 2.3 0 00-2.3-1 1.3 1.3 0 01-.4 0h-.1a1.7 1.7 0 011.3-.2 1.8 1.8 0 001.1.1c.2 0 .4-.2.5-.4a3.9 3.9 0 011.4-2l.6-.7a.7.7 0 010 1 6 6 0 00-1.5 2.5z" />
    </PlaceableSVG>
  )
}

export default FlyingGull3
