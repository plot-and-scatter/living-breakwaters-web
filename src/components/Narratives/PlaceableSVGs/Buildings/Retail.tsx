import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Retail.scss'

const Retail = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Retail'}
      viewBoxObj={viewBox(0, 0, 146.5, 318.57)}
      defaultScale={0.1}
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.25"
          y1="159.68"
          x2="146.25"
          y2="159.68"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.11" stopColor="#fafbfb" />
          <stop offset="0.25" stopColor="#ebf0f0" />
          <stop offset="0.39" stopColor="#d3dede" />
          <stop offset="0.54" stopColor="#b1c5c4" />
          <stop offset="0.7" stopColor="#86a5a4" />
          <stop offset="0.87" stopColor="#517e7c" />
          <stop offset="1" stopColor="#215a58" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS">
          <g id="buildings">
            <path
              className="cls-1"
              d="M135.25,113.89a13,13,0,0,0-.72-4.28q-7.67-20.86-15.46-41.68c-1.51-4.06-3.1-8.09-4.83-12.57-6.1,16.35-11.84,32.23-18,48a42.5,42.5,0,0,0-3.11,18.4c.22,3.71,0,7.44,0,11.17,0,.65-.14,1.3-.24,2.44H82.25v58h-4v-136H62.7s-.13-2-.13-2.88c0-16.62,0-33.24,0-49.87A15.81,15.81,0,0,0,61.65,1a15.63,15.63,0,0,0-.78,3.42c-.06,16.28,0,32.56.38,48.83v5h-15v20h-18v35H.25v205h146v-184h-11C135.29,127.7,135.33,120.8,135.25,113.89Zm-101-28.57h36v6h-36Zm0,12h36v6h-36Zm0,11h36v6h-36Zm-25,45h61v7h-61Zm61,62v7h-61v-7Zm-61-8v-7h61v7Zm0,39h61v7h-61Zm0-8v-7h61v7Zm0-48v-6h61v6Zm61-46h-61v-7h61Zm-61,24h61v7h-61Zm61.56,96.05c-.16,1.52,0,3.07,0,4.95H61.29c-16.27,0-32.54,0-48.81.05-2.42,0-3.63-.5-3.15-3.12a7.31,7.31,0,0,0,0-1.81c-.16-1.62.39-2.3,2.16-2.29q28.56.09,57.12,0C70.22,262.17,71,262.55,70.81,264.37Zm-.29-139.9a28.66,28.66,0,0,0,0,3.85H9.25v-6.85c.91-.06,1.67-.14,2.43-.14,18.59,0,37.18,0,55.76,0C70,121.26,70.88,122,70.52,124.47Zm59.9.85h-8.17v-3h8C130.34,123.39,130.37,124.23,130.42,125.32Zm-7.76-10h7.59v3h-7.84ZM117,129.14c.73.12,1.22,1.71,2.18,3.18h-8.94V129A41.87,41.87,0,0,1,117,129.14Zm-6.76-3.82v-3h8v3Zm0-10.42a43.42,43.42,0,0,1,7,.14c.7.12,1.13,1.85,1.93,3.28h-8.9Zm-12,.42h8v3h-8Zm8,7v3h-8v-3Zm-9,155h-7v-135h7ZM100.74,129c1,.11,2.05,0,3.09,0,2.82,0,2.92.15,2.32,3.34H98.38C97.64,130,98,128.67,100.74,129Zm10.51,148.36h-7v-135h7Zm14,0h-7v-135h7Zm5-145h-8V129a39.1,39.1,0,0,1,6.64.13c.72.12,1.24,1.44,1.82,2.35Zm10,10v135h-7v-135Z"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Retail
