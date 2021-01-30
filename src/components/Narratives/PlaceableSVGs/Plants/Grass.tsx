import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const Grass = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBox={viewBox(614.4, 326.7, 9.1, 16.3)}
      defaultScale={0.3}
      {...props}
    >
      <path
        className="cls-24"
        d="M614.7 330.4l1 3.6a29.5 29.5 0 012.8-7.2l-.8 4.5h.1l.8-2.2a13 13 0 011.2-2c-1.2 2.8-2.7 5.4-2 8.6l1.5-6.6h.2l-.8 4-.4 4.2a33.7 33.7 0 011.5-6.9v.8h.1l.8-2c-.1 1.2-1 2.3-.4 3.7l.8-2.5h.1l-.5 2 .4-.4c-.3 1-.9 1.8-.4 2.7l1.9-4.3-.6 3.2h.1l.7-1.3a14.1 14.1 0 00-1.3 4.8 430 430 0 001.9-3.8h.1l-1 2.3.1.1.7-.7a8.7 8.7 0 00-1.6 4h.2l.6-1.6-.6 3.3h.2l.4-1h.2a5 5 0 01-.1.7 3.3 3.3 0 01-2.3 2.3 2.2 2.2 0 01-1 .1l-2.8.1a1.3 1.3 0 01-1-.5 23.4 23.4 0 01-1-3c.2.6.6 1.2 1 1.7l-.7-3.3v-.5l-.3-3.4.4 1c.6-1.3.1-2.9-.2-4.5z"
      />
    </PlaceableSVG>
  )
}

export default Grass
