import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const Seaweed = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBox={viewBox(12.3, 381.5, 9.7, 19)}
      defaultScale={0.3}
      {...props}
    >
      <path
        id="Seaweed"
        className="cls-13"
        d="M19.3 386.3l-1.4-1.6c-.6.6.2 1 .2 1.6l-2.3 1.2a2 2 0 01-1 1.6l1-1.6.6-2.5-.3-.1c-.1-.5 0-.9.8-1.5l-.1 1.2c1-.7.5-1.5.4-2.3l-.4-.7-1.1 2.8-2.4-2.1c0 .5.5.8.8 1.2a9.6 9.6 0 011.2 1.2 6 6 0 01.4 1.5 3.9 3.9 0 01-2.5-2c-.6 1.3-.5 1.6 1 2.2 1 .6 1.2.8.7 1.7l-.9 2a8.9 8.9 0 00-.3-1.7 2.8 2.8 0 00-1.3-1.4 15.6 15.6 0 000 2.4 2.3 2.3 0 00.6 1.2l3 3c.7.7 1.4 1.3 1 2.1l-1.3-1.2-.2.1.5.6-1-.2a3.2 3.2 0 00.5.4 1.7 1.7 0 01.7 2.4 2.2 2.2 0 000 2 1.6 1.6 0 00.6.7c-.1-.4-.4-.8-.3-1.2s.7-.7 1-1l.4-.5.3-.4-.1-.1-1.6.8c.3-.6.6-1 .7-1.5a2 2 0 00-.3-2.7.7.7 0 01-.2-1v-.7-.4l-1 1a9.6 9.6 0 01-1-1.2c-.6-1-.4-1.6.9-2.3a7.9 7.9 0 00.8-.7 2.3 2.3 0 01-.3 0 1.2 1.2 0 011.1-1.3l-.8 1.4c.8-.2.9-.7 1-1a9.9 9.9 0 01.7-1 5.6 5.6 0 012.8 2l.6.3c-.3-.7.1-1.2.5-1.7h-.8l-.5.5c-.7-.6-.3-1.4-.4-2.1-.5.1-.2.8-1 .6l.3.7h-.2l-1-1h.1z"
      />
    </PlaceableSVG>
  )
}

export default Seaweed
