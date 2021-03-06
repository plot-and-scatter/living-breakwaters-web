import React from 'react'

const Bush2 = ({ xOffset, yOffset }) => {
  const baseXTransform = -720 * 1.5
  const baseYTransform = -250 * 1.5

  const xTransform = baseXTransform + (xOffset || 0)
  const yTransform = baseYTransform + (yOffset || 0)

  return (
    <g transform={`translate(${xTransform}, ${yTransform})`} id="Bush2">
      <path
        id="Bush-2"
        data-name="Bush"
        d="M717.5 250l.5-1.3.6.6v-1.6l.6.8 1-.1-.2-1 .7.2.3-1 .8-.5.2 1.4.4-.8c0-.2 0-.2.2-.3l.8 1-.5.7.7-.2.6 1.2.5-.6.6 1.8-.2.5.4.5c-.7.8-.1 1.6 0 2.6l1-2 .3.6a4.1 4.1 0 00-.3.7 2.8 2.8 0 000 .7l-.9.5.8.6-.5.4.2.2.3-.6 1.2.9c0 .6.8 1.4 0 2.2l1 .6.6 1.8-.7.5.6.2-2 3.3-.6-.2v.8h-1l-.6 1.8 1.2.4c-.3.8-1.2.5-1.5.8l-2.1-.2h0l-1.8-.4v3.2h-.8l.1-2c-.4-.5-.7-.8-1.3-.5l-1.1-1.1-.7 1.4-1.1-1-1 .5-.7-1-1.3-.5-.3-.9-1.2-.3.5-1.6.6.8.9.4a2.1 2.1 0 000-.8 11.8 11.8 0 00-.6-1.3c.4-.9 1.3-.3 1.9-.8l-1.8-1.7.7-1-.3-1.3.2-.2 1 .9c-.1-1.1.7-2.1 0-3.1l.5-.2.2-.2-.3-1 .3-1 .8.8-.1-.8c.5-.1.1-1 .8-1 0 .3-.1.6.5.5l-.5-.5a4 4 0 011-2.3c0 .3 0 .7.6.5z"
        opacity=".6"
        stroke="#7e8561"
        strokeMiterlimit="10"
        strokeWidth=".3"
        fill="#7e8561"
      />
    </g>
  )
}

export default Bush2
