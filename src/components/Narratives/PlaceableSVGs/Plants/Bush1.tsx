import React from 'react'

import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const Bush1 = ({ xOffset, yOffset }: PlaceableSVGProps): JSX.Element => {
  const baseXTransform = -1655
  const baseYTransform = -290

  const xTransform = baseXTransform + (xOffset || 0)
  const yTransform = baseYTransform + (yOffset || 0)

  return (
    <g transform={`translate(${xTransform}, ${yTransform})`} id="Bush1">
      <path
        className="cls-9"
        d="M1667.6 295.3l-.4-1a.6.6 0 00-.2-.3l-1.7-1c-.4-.2-.4-.2-.2-.6l.7.7.2-.6c.4.1-.1 1 .7.8l-.5-1.2.3-1.3h.2a3 3 0 00.6 3l.3-2v-.1l.2.3a8.4 8.4 0 00-.3 2 6.4 6.4 0 00.8 1.7l.4-.8.1.5a2.7 2.7 0 000 .3h.7l-.4.4h.2l.2-.4.1-.2.2.5.5-.5-.2 1.1c.4.3.7.1.7-.3a1.4 1.4 0 00-.9-1.4 1 1 0 01-.4-1.2l.5.4-.2-.4h.1l.2-.7v.6l.4-.4v.5l.3-.4h.1v.4a2 2 0 000 .3c0-.1.2-.4.4-.4l.6.3.8-.5v.5a.9.9 0 00.5 1.5 2.4 2.4 0 01.4.2 9.2 9.2 0 00.1-1.4c0-.3-.2-.7.4-.8a10.7 10.7 0 000 1.4c0 .2.3.5.5.7.6-.6-.2-1-.3-1.7l.6.5v-.1l-.1-.5c.5-.2.3.5.6.5l.5-.3v1l.5.2c-1 .5-1 .7-.5 1l-.3.6.2.1.3-.4.3.4.4-.8a1.2 1.2 0 010 1.5h.3l.4-.2-.3.8-1 .3 1.8.2a2.7 2.7 0 01-.6.3c-.7.2-1.5.2-2 1l2.4-.2c-.3.3-.5.5-1 .4a3.3 3.3 0 00-1 .3v.3a2 2 0 00.3.3c-.4 0-.9.4-1.3 0l-.6-.5a1 1 0 01-.2.1l.2.4a2 2 0 00.6 0 2.8 2.8 0 01-.5.2 3.9 3.9 0 01-.7 0v.2h.4v.5h.3c0 .6-.5.1-.7.4l.5.3c-.5 0-.9 0-1.2-.4-.2-.2-.7 0-1-.1v.2l.2.3v.2l-.3.1c0-.7 0-.8-.7-.7a3.7 3.7 0 00-.9.1c-.1 0-.3.3-.2.4a.5.5 0 00.3.3h1.4l.2.3.1-.5h.5l.2-.3.5.5-1 .7h.7v.2l-.4.2-1-.1a1.5 1.5 0 000 .2l1-.1-.1.2h1.8l.1.4h-1.4v.3h.4l.2.4a2.5 2.5 0 01-2.3-.2c-.5-.3-.6-.2-.7.4l-.3 1.6a3.4 3.4 0 000 .4h.1l.4-.5a1.8 1.8 0 01-.2 1.7 2.5 2.5 0 00-.3 2.1l.8 2.8a11.2 11.2 0 01.2 1.5 1.7 1.7 0 01-1.8.2.5.5 0 01-.3-.3 2.6 2.6 0 010-.9 8 8 0 00-.1-3.6 2.2 2.2 0 010-.8 1.4 1.4 0 00-.5-1.4l-1.5-1.4a.4.4 0 00-.3-.2.9.9 0 01-1-.2.2.2 0 00-.2 0l-2 .5a1.2 1.2 0 00-.4-.1c-.2 0-.4.1-.5-.3l-.6-.2c-.4 0-.8 0-1.3-.2l.4-.1-.8-.3.2-.4 1 .3v-.6c.5.7.8.8 1.4.6l.4.2-.4-.4a5.7 5.7 0 00-.5-.2 1.5 1.5 0 01-.5-.3h.2c-.4-.5-1.3-.4-1.5-1.2l.4.2h.1c0-.3-.2-.5-.3-.8l1.4.3.1-.8h.2l.3.7h.2v-.7c0-.2-.2-.2-.4-.3a4.5 4.5 0 01-1-.4 3.8 3.8 0 01-.7-.9l-1 .2.3-.2-1.5-.4h.4l-.1-.2-.3.2h-.2l-.1-.3c-.7-.4-.6-1.1-1-1.6-.1-.1 0-.4.2-.7.3 1 .5 1.9 1.6 2.2l.2-.2c.2.4.5.4.8.5v-.1l-.8-.4-.1-1 .8.9c0-.2 0-.4-.2-.7l1 1v-.4l.7.6.6-.2a3.5 3.5 0 010-.3h.2v.4c0 .4.2.6.5.6a2 2 0 00.2-.2l.2-.1-.4-.2-.3-.7.4.5.2-.1c-.1-.4-.1-.9-.4-1.1-.4-.5-.6-1.1-1.3-1.3-.2 0-.3-.3-.5-.5a1.6 1.6 0 01-.2-1.7 14.1 14.1 0 00.7 1.3 8 8 0 001.2 1.6 9.2 9.2 0 001.5 1 4.1 4.1 0 00-1-2.2l.1-.2-2.7-4.4.1-.1a11 11 0 001.2 1.3 10.6 10.6 0 001.6 1c.1.1.7.5.1 1l.4-.2.4 1h.1v-1.3h.3a2.6 2.6 0 000 .6 2.5 2.5 0 00.5.5l-.6.4.6.6.4-.6a.3.3 0 000-.3c-.3-.5 0-.8.3-1.1s.3-.3 0-.4a2 2 0 00-.6-.1c-.6 0-1-.1-1.2-.8l-.3-.3.5.1.2-.4h.1a2.3 2.3 0 010 .4c-.2.3-.2.6.3.6a8 8 0 011 .2v-.7l1.1 1a1.7 1.7 0 00.4.2l.8 1 .2-.3z"
        transform="translate(0 -24.2)"
      />
    </g>
  )
}

export default Bush1