import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './House3.scss'

const House3 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 72, 63)}
      defaultScale={0.2}
      extraClasses="House3"
      {...props}
    >
      <rect width="30" height="20" x="20" y="43" fill="red" />
      <path
        d="M1733 264h-3l12-11 12 11h-3v16h-18z"
        transform="translate(-1706 -253)"
        fill="pink"
      />
      <path
        fill="blue"
        d="M1720 272h-4l1-1 6-4a2 2 0 011-1h9v14h18v-14h9a1 1 0 011 0l7 6h-4v12c3-1 5 1 7 3l6 4a9 9 0 011 1h-7v24h-25v-16h-8v16h-25v-24h-7a7 7 0 011-1l9-7a5 5 0 012 0 15 15 0 012 0z"
        transform="translate(-1706 -253)"
      />
      <path d="M18 50h4v3h-4z" fill="red" />
      <path
        fill="green"
        d="M1742 268c-1-2-3-1-4-1v4h4v-3l1 3a10 10 0 011 0h1l-2 1-1 2v-2h-4v3h3l1-1 1 1h3v-3l-1-1 1-1v-3a20 20 0 01-2 0 1 1 0 00-2 1z"
        transform="translate(-1706 -253)"
      />
      <path
        fill="grey"
        d="M50 22h4v7h-4zM19 22h4v7h-4zM58 50h3v8h-3zM12 50h2v8h-2z"
      />
      <path
        fill="orange"
        d="M1729 306h3a1 1 0 001 0v-4h-4z"
        transform="translate(-1706 -253)"
      />
      <path fill="purple" d="M50 50h4v4h-4z" />
      <path
        fill="white"
        d="M1729 307v4h3l1-1v-3zM1752 307v3a1 1 0 000 1h3v-4z"
        transform="translate(-1706 -253)"
      />
      <path fill="cyan" d="M50 54h4v4h-4zM46 50h3v4h-3zM19 54h3v4h-3z" />
      <path fill="brown" d="M1727 292h31z" transform="translate(-1706 -253)" />
    </PlaceableSVG>
  )
}

export default House3
