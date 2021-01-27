import React from 'react'

import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const House1 = ({ xOffset, yOffset }: PlaceableSVGProps): JSX.Element => {
  const baseXTransform = 0 * 1
  const baseYTransform = -30 * 1

  const xTransform = baseXTransform + (xOffset || 0)
  const yTransform = baseYTransform + (yOffset || 0)

  return (
    <g
      transform={`translate(${xTransform}, ${yTransform})`}
      id="House1"
      className="st322"
    >
      <path
        className="st325"
        d="M961.8 418.4h64v6.2h-64zm28.8-36.9l-1.3-.1h-15.7c-.8 0-1.3 0-1.4 1l-2 10.8h52.5l-1.2-6.2-.7-4.6c-.1-.7-.4-1-1.1-1h-16.9l-.3.1"
      />
      <path
        className="st325"
        d="M991 414.3h-19l-.2.3c-.7 3.6-.6 3.8 3.2 3.8h12.7l15.1.2 15.7-.2c2.7 0 2.7 0 2.7-2.8v-1.4h-17.8l-1.5.2"
      />
      <path
        className="st325"
        d="M989 418.2c.1-1 .7-1.2 1.8-1.2 3.8 0 7.7 0 11.6-.2 1 0 1.3.6 1.5 1.4m6.4-25.3c0-.2 0-.6-.2-.8l-13.6-17.5-2 2.4a2698 2698 0 00-11.3 14.6c-.3.4-.4.9-.6 1.4m17.6 8.5v-1.6H993l-.3 1.6m-2.3 15.2c0-1 .4-1.3 1.6-1.3 3 .2 6.2.2 9.2 0 1.3 0 1.5.4 1.6 1.3m-9.6-13v10m6.8-10.1v9.9"
      />
      <path
        className="st325"
        d="M1000.2 383.5c.1-.7 0-1.1-.9-1h-5.6c-1-.1-.9.5-1 1m0 18.1h7.2c1 0 1.4.3 1.2 1.8h-9.4c-.3-1.1 0-1.6 1-1.8m0-18l7 .2h1l.6.6-.8.5h-8c-.3 0-.6-.4-.8-.6l.9-.6m9.1 31.5c.1-1 0-1.4-1.2-1.4h-8.2c-1 0-1.3.5-1 1.4m16.5-15.7l-2.3-.2v8.5h8.6v-8.3h-6.1m-26.4 0h6v8.2H979v-8.4l2.5.2m18.4-14.3v6.2h-6.8v-6.2m14.9 14.4v8m-22.9-8.1v8m-3.9-8v8m30.4-7.9v8M998 385.2v6m-12.4 12.3l2 .1m-8.3 0h2m32.7 0h-2m-16.7-18.4l-.1 6m12.6 12.3l-2 .1m-33.6 10.7V393m49.1 21.2V393"
      />
    </g>
  )
}

export default House1
