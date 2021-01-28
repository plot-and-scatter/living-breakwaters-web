import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const Deadwood = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBox={viewBox(670, 242, 18, 43)}
      defaultScale={0.1}
      {...props}
    >
      <path
        id="Deadwood"
        d="M675.3 283.2a1.6 1.6 0 000-.7c-.3-1 .3-2.3.4-3.4l.3-3.3c.1-.7.7-1.3.6-1.8-.6-2.2.2-4.3 0-7-.3-1.7-2.4-2.7-3.9-4.4l-1.3.7-.6-.3h0l.8-.7-.6-.4.2-.2 2 .6 3.6 3.2.6-.4c-.2-1-.8-1.8 0-2.7a1 1 0 00.2-.8 18.4 18.4 0 010-5.3l-.5-1.2.4-2.5-3-2.7h0l2.5.5a12.3 12.3 0 00-3-7.3l-2-.2h0v-.6c3 .3 4.4 1.4 5 4l1.6 6.6a5 5 0 014 .3 5.2 5.2 0 012.9 3c.6.8 2 .7 2.2 1.9h0-.9 0a11.5 11.5 0 01-1.6-1.3l-1-1.6a16.6 16.6 0 00-1.7-1.4l-2.1-.7-1.7 1 .4 3.1 1.3.6 2.2-.7.2.4a3.2 3.2 0 00-.5.2l-.7.5 1.7 1.6-1 3.2h-.3l.3-3.3-3.3-1.9c-.5 1.8.1 3.4.3 4.6l-1.2 6.2a10.4 10.4 0 01.2 1.9 52.8 52.8 0 01-.7 8 52 52 0 00-1 6.5"
        strokeWidth="0.2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#7e8561"
      />
    </PlaceableSVG>
  )
}

export default Deadwood
