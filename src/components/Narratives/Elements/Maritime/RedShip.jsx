import React from 'react'

const RedShip = ({ xOffset, yOffset }) => {
  const baseXTransform = 0 * 1
  const baseYTransform = 0 * 1

  const xTransform = baseXTransform + (xOffset || 0)
  const yTransform = baseYTransform + (yOffset || 0)

  return (
    <g
      transform={`translate(${xTransform}, ${yTransform})`}
      id="Red_ship"
      className="st322"
    >
      <path
        className="st323"
        style={{ fill: 'red' }}
        d="M121 390.8c0-4.2.3-8.2-.3-12.2l.8-2h.3l.2 1.3-.2 11.4c0 1.2.3 1.8 1.6 1.7h2.4c1.6-.1 3 .3 4 1.5.4.3 1.1.5 1.6.5l17.4.3c1.5 0 1.9-.5 1.8-1.8v-4l12 .1v5.1l.4.7c.2-.3.6-.5.6-.8v-4l.2-1h10.9c.8 0 1 .4 1 1.2v3.4c0 .4.4.9.5 1.3.2-.4.5-.8.5-1.3v-4.4l12.2.2v4.6l.3 1c.2-.3.5-.7.5-1l.1-4.6 12.1.2v7.3c0 .6.3 1.2.5 1.8.1-.6.4-1.2.4-1.8l.1-7.3 12.1.2v5.1c0 1-.2 2-.1 3 0 .4.3.7.5 1 .2-.3.5-.7.5-1l.2-6.7v-1.4l12 .2v2l-.1 6.2c0 .3.4.6.6 1 .1-.3.4-.7.4-1l.2-6.6v-1.7h3l7.8.2c1 0 1.2.3 1.2 1.2l-.1 6.6v1.1c0 .2.4.4.6.4l.4-.4v-1.1l.3-17.7v-1.7h6.3c1.4 0 2.9.2 4.3.1 1.3 0 1.6.5 1.5 1.7l-.3 17.8v.4l.5 1.2c.2-.4.5-.8.5-1.2l.1-8 12.1.1v8.3c0 .4.2.7.4 1l.5-1 .2-13.5v-1.5l12.1.2-.1 8-.1 7c0 .3.3.7.4 1 .2-.3.6-.7.6-1.1l.3-19.2v-1.8l12 .2v1.6c0 6.3-.2 12.5-.3 18.8v1l.5.7c.2-.2.6-.4.6-.6v-3c.2-4.1.2-8.2.3-12.5h10.5c1.3 0 1.5.5 1.5 1.7l-.2 12.7v1.1c0 .3.3.6.5.8.2-.2.5-.5.5-.8l.2-8v-1.6l12 .2v9.1c0 .5.3 1 .4 1.4.2-.5.5-.9.5-1.3l.2-13.3v-1.6l12 .2.1 1.4-.2 13.2v1.1c0 .2.3.3.4.5l.5-.5v-1l.3-18.5v-2.2l12 .2.1 1.6-.1 11.3c0 .4.3.8.4 1.2l.6-1.2c0-7 .2-14 .3-20.9v-1.3c1-.6 2-1 3-1.7v-3.1h.2l.6 5.8h.2l.6-1.3c.5-.8 1-1.8 1.7-.2.1.2.8.2 1.2.2l4.4.1.4 1.7h.5l.4-2.5c.1-.6.3-1.2.3-1.9-.1-1.5.7-1.7 2-1.6 1 .2 2.2 0 3.5.1l.5 5.9c.1 0 .2.2.3.1 1.8-1.2 3.4.8 5.3 0v2.7h-2.8c-.7 2.1-.6 2.6 1.2 3.5 1 .5 1.7 1 1.6 2.3l-.3 11.6c0 2.3 0 2.3 2.5 2l.2-13h10.4c1.3 0 1.8.3 1.7 1.8l-.3 17.8v1l.5.8c.2-.3.5-.6.5-1l.2-12.8c0-1 .2-1.4 1.3-1.4l10.8.2v1.6l-.2 12.5c0 .4.3.8.5 1.2.2-.4.5-.8.5-1.2.2-5.5.2-11 .3-16.6v-2.3l12 .2v1.8l-.2 16.5v1c0 .3.3.5.5.8.2-.3.5-.5.5-.8l.2-6.3.1-8.2h2.5l7.3.2c2.2 0 2.2-.4 2.2 2l-.2 11.6v1c0 .3.3.5.5.7.2-.2.5-.5.5-.7l.1-4.8.1-5.1c4 0 7.7 0 11.4.2.2 0 .6.6.7 1v2.4l2.4.2v3.5l-2.7.2.6 3.9a14.2 14.2 0 01-3.8 9.6 9.2 9.2 0 01-5.5 3c-2.1.3-4.2.9-6.2 1.6-1.7.6-3.5.9-5.4.8-3.3-.1-6.6.1-10 .1h-30.3c-5.7-.1-11.5-.6-17.3-.6-5 0-9.9.5-14.9.7h-75c-4.3 0-8.7-.3-13-1a62 62 0 00-10-.4c-.8 0-1.7.3-2.2-.8 0-.2-.7-.4-1-.3-1.8.5-3.4 1.3-5.2 1.8-1 .4-2.1.7-3 .4-4.5-1.7-9.1-1-13.8-.6l-6.2 1-1.4-.1c-2.6-1-5.3-.6-8-.1h-1.8c-3.6-1.3-7.4-1-11.1-.7-3.6.2-7.2.1-10.7 0-3.9-.2-7.7 0-11.6 0-.9 0-1.8-.5-2.7-.5H155.3a425.7 425.7 0 01-16.8-.3l-15.7-.7-3 .2v-1c1-2 .3-3.8-.9-5.5l-11.3-16.4c-.3-.4-.5-1-1-1.6l14.4.3"
      />
    </g>
  )
}

export default RedShip
