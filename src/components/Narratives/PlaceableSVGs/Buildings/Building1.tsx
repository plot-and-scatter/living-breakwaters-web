import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Building1.scss'

const Building1 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(1037, 338, 154, 82)}
      defaultScale={0.5}
      extraClasses="Building1"
      {...props}
    >
      <rect width="30" height="35" x="1099" y="380" fill="red" />
      <path fill="blue" d="M1042.7 413h141.7v6.7h-141.7z" />
      <path
        fill="pink"
        d="M1044.6 381.5h-7.6l1-1.6 8-8c.5-.6 1.5-.9 2.3-.9h16.8v-11.3l3.6-.2c-.6-1.7 1.1-3.7-1.2-5 .3-.4.5-1 .8-1 2.6-.2 5.1-.2 7.7 0 .3 0 .5.6.7 1-2.2 1.2-.5 3.3-1.2 5h3.5V371h20.3v-10h-7.2l-.4-.6c7.2-7.2 14.7-14 22.1-21.2 7.5 7 14.8 14.1 22.1 21.2l-.3.6h-7.2v10h19.4v-11.2l3.6-.2v-3.9c0-.3-.2-.5-.3-.8l-.9-.9c.5-.2 1-.5 1.4-.5h6.5c.5 0 1 .2 1.4.4-.2.3-.7.7-.8 1-.2 1-.2 2-.3 3.1v1.6h3.4V371h16.9c1.2 0 2.1.3 3 1.2l7.2 7.5 1.4 1.7h-7.2V413h-54.9v5.4h-9.1v-17.2h-10.4v17.2h-9.3V413h-54.8v-31.5z"
      />
      <path
        fill="orange"
        d="M1118.8 397.6c.1-3-2-5.1-5-5.1a5 5 0 00-5 5.1h10zm36.5-35h2.7v6.4h-2.7zm-3.6 0h2.7v6.4h-2.7zm-82.7 0h2.7v6.4h-2.7zm3.6 0h2.7v6.4h-2.7zm41.7.8h3.7v3.9h-3.7zm-41.3 27h3.8v3.8h-3.8zm77.5 6h3.7v3.7h-3.7zm-77.6 0h3.8v3.7h-3.8zm-16.6 0h3.8v3.7h-3.8zm94.2-6h3.8v3.8h-3.8zm-94.3 0h3.8v3.8h-3.8zm58-14h3.8v3.8h-3.8zm-29.1 14h3.7v3.8h-3.7zm82.2 0h3.7v3.8h-3.7zm4.6 0h3.7v3.8h-3.7zm0 6h3.7v3.7h-3.7zm-4.6 0h3.6v3.7h-3.6zm-28.8 0h3.6v3.7h-3.6zm0-6h3.6v3.8h-3.6zm-53.5 6h3.7v3.7h-3.7zm4.7-6h3.6v3.8h-3.6zm44.2 0h3.6v3.8h-3.6zm-44.3 6h3.8v3.7h-3.8zm44.2 0h3.7v3.7h-3.7zm-73.8 8.3v-3.6h-3.7v3.9l3.7-.3zm78.4-18.8h3.7v3.6h-3.7zM1085 401h3.7v3.6h-3.7zm65.5 0h3.8v3.6h-3.7zm-12 0h3.7v3.7h-3.8zm28.7 0h3.7v3.7h-3.7zm4.7.1h3.7v3.6h-3.7zm-99 0h3.8v3.6h-3.8zm82.4-4.8h3.5v3.8h-3.5zm-86.9 0h3.6v3.8h-3.6zm-16.6 0h3.5v3.8h-3.5zm57.9-32.9h3.6v3.8h-3.6zm4.6 4.8h3.7v3.7h-3.7zm-4.6 8.2h3.6v3.8h-3.6zm45.5 14h3.6v3.8h-3.6zm-86.8 0h3.5v3.8h-3.5zm45.8-9.3h3.8v3.6h-3.8zm-58 4.8h3.8v3.5h-3.7zm-4.5 4.6h3.6v3.7h-3.6zm120.2-4.6h3.7v3.6h-3.7zm-4.6 0h3.6v3.6h-3.6zm-94.4 0h3.8v3.6h-3.8zm77.6 0h3.8v3.6h-3.8zm-65.4 0h3.6v3.5h-3.6zm4.5 0h3.7v3.5h-3.7zm44.3 0h3.6v3.6h-3.7zm0 15.2h3.6v3.6h-3.7zm-44.3 0h3.7v3.6h-3.7zm20-33h3.7v3.7h-3.6zm45.7 33h3.5v3.7h-3.5zm-103.6 0h3.6v3.6h-3.6zm0-15.2h3.6v3.6h-3.6zm16.7 15.2h3.6v3.6h-3.6zm86.8-15.2h3.6v3.6h-3.6zm-86.8 0h3.6v3.6h-3.6zm41.3-4.8h3.7v3.6h-3.7zm63.5.9h9.9-54.7 44.7zm-25.8 9.5l-.6-.3c-.3.4-.8.7-.8 1.1v6.6c0 .3.5.6.7 1 .2-.4.6-.7.6-1v-7.4zm-82.5 8.3v-8.4l-.5-.2c-.3.4-.7.8-.7 1.3-.4 4.9-.1 7 1.2 7.3zm34.3-17.8h-44.8-9.8 37.9m81.2 9.5l-.5-.3c-.3.3-.8.6-.8 1v6.7c0 .3.4.6.6 1 .2-.4.6-.7.7-1.1v-7.3zm-82.4 4v-3.3c0-.3-.4-.6-.7-.9-.2.3-.5.5-.6.8v7c0 .2.4.5.6.7.2-.3.6-.5.7-.8v-3.5zm47.1-7.4V371v42.3-11.1zM1099.2 370.9v42-42z"
      />
    </PlaceableSVG>
  )
}

export default Building1
