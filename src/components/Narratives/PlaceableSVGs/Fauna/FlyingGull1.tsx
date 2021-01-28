import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const FlyingGull1 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBox={viewBox(-5.5, -2.9, 12.5, 4.2)}
      defaultScale={0.05}
      {...props}
    >
      <path d="M0 0a2.9 2.9 0 001.8-.6 7 7 0 012.9-1.1 5.9 5.9 0 002-1 1.5 1.5 0 01.3-.2c0 .3-.2.5-.3.7h.2l-.4.2-1 .4a2.8 2.8 0 00-.9.3l-.7.4-1.4.8c-.4.2-.6.6 0 1h.1a1.3 1.3 0 01-.3.3.3.3 0 01-.3 0 .5.5 0 00-.5 0 1 1 0 01-1-.1 5.6 5.6 0 00-.7-.3 1.7 1.7 0 00-.5 0 3.6 3.6 0 01.7-.8zM0 0l-.4.2a2.2 2.2 0 00-1.3-.4 1.9 1.9 0 01-.5 0 3.5 3.5 0 00-1.5-.2 6.3 6.3 0 01-1.2 0 .8.8 0 01-.6-.4 2.6 2.6 0 001.6.1 5.1 5.1 0 012.3.2h.1a2.3 2.3 0 011.5.5z" />
    </PlaceableSVG>
  )
}

export default FlyingGull1
