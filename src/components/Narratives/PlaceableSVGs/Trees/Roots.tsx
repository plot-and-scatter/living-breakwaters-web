import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const Roots = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBox={viewBox(-13.5, -0.5, 25.7, 34)}
      defaultScale={0.25}
      {...props}
    >
      <g className="Roots">
        <path d="M0 0c-.8 1-.6 3-1.9 3.5a4.8 4.8 0 00-2.5 1.7 7.3 7.3 0 01-1.2 1.3c-.5.4-.9 0-1.4.4-.7.5-1.4 2-1.8 3a13.4 13.4 0 00-.9 2.5 11 11 0 00-.6 2.5 5.5 5.5 0 010 2.4 4.7 4.7 0 01-1 1.4l-2.2 3.2a7.3 7.3 0 001-1c.7-.8.6-1 .9-2.1l.3-1 .2-1.4c.1-1 .4-1.5.6-2.4a4.2 4.2 0 00.5-.1l.5-1.5c.1-.4 0-.8.2-1 .1-.2.4 0 .5-.2.4-.5.4-1 .6-1.6a1.9 1.9 0 01.7-1 3.4 3.4 0 012.1-.6c1-.2 1.3-.8 1.6-2.2 1.2 0 3.3-2.2 2.7-.8-.4.8-3.4 4.8-4 6s-.3 2.4-.6 3.8-2 1.4-2 3.5c0 .8.4.9.6 1.5a12 12 0 01.7 2.3 18.9 18.9 0 01-.6 5c-.2.7-.7 1.2-.9 1.8l-.5 1.8a7.2 7.2 0 01-2 2.6c.3.1 1-.3 1.4-.6a3.2 3.2 0 001.2-2 22.9 22.9 0 001.2-2.7 20.7 20.7 0 00.5-3.6v-1.4l.1-1.6c0-2.1-1-3 .4-4.9a4.2 4.2 0 00.9-2.8 8.2 8.2 0 01-.2-1.4c0-.6 3.8-5.6 4-6.6.8 0 1-1.2 1 .5a11.3 11.3 0 010 2.9c-.3 1.5-.6.8-1.3 1.2a2.7 2.7 0 00-1.1 2.7c.3.9 1.2.6.1 1.8a6 6 0 00-1.5 2.3l-1.1 3.5a13.4 13.4 0 01-1 2.5c.6.2 1.3-1.2 1.5-2l.2-1.2a8.2 8.2 0 01.3-1 6.3 6.3 0 01.6-2l.4-.5.4-1c.3-.4 1-.4 1.2-1 .4-.7-.2-1.3 0-2s.7-.4 1-.2c.7.7.2.7 0 2 .9.8.4 1.6 0 2.9-.3.7-1 3.5-.7 3.6.5-1 .2-2.6.8-3.7.3-.5 1-.4 1-1.4s-.6-1-.6-2 .4-1.5-.2-2.2c.2-.2.2-.7.3-1 .3-.3.4-.2.7-.3.8-.3 0-2.6.3-3.9.4 0 2.3 3.2 2.4 3.9s-.5 1.3-.4 2.2c0 1.1.3.8.8.8a1 1 0 011.2.8c0 .3-.2.7-.1 1 0 .4.2.4.3.7a3.6 3.6 0 01.4 2.2 10.7 10.7 0 000 2.7 14.2 14.2 0 000-2.2l.2-2a5.4 5.4 0 00-.5-2.4 3.4 3.4 0 01-.2-1.4c0-.7.2-1-.5-1-.3 0-.4.6-.9.5-.2-.1-.4-.7-.6-1 .3-.6.9-1 .6-2-.3-.7-1.2-.4-.8-1.7 0 0 .8-.5.3 0 .4 0 .2.8.7.8l.2-.8c1-.6.3 2 1.4 2l-.1-1.5a2.7 2.7 0 00-1.1-1.5c-.4-.2-.7 0-1-.4l-.3-.6c-.2-.4-.6 0-.4-.9.7-.4 1 1 1.6 1a2.2 2.2 0 011.3-1.3c.6-.2 1 .4 1.3 1a3 3 0 01.5 1.3c.4 1.8 1.3 2.1 2.4 2.9a3 3 0 011.2 1.3c.2.7.3 1.7.7 2.1 0-.7-.6-1.5-.8-2a16.9 16.9 0 01-.6-1.8 22.7 22.7 0 00-.8-2.2 3.7 3.7 0 00-.6-1.2c-.3-.2-.6 0-.9-.1-.4-.4-.3-1.7-.3-2.4-.7-.2-1.3-1-2.1-.8s-1.1 1.6-1.8.5l-.5-.9c-.4-.6-.3-.4-.4-1.3 0-1.4-2.6-1-3.2-.5z" />
      </g>
    </PlaceableSVG>
  )
}

export default Roots
