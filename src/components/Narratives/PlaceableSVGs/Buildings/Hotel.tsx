import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Hotel.scss'

const Hotel = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Hotel'}
      viewBoxObj={viewBox(0, 0, 123.49, 207.47)}
      defaultScale={0.103}
      {...props}
    >
      <defs>
        <linearGradient
          id="hotel-linear-gradient"
          x1="0.25"
          y1="103.74"
          x2="123.24"
          y2="103.74"
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
        <g id="EXISTING_SECTION">
          <g id="section">
            <g id="buildings">
              <path
                className="cls-1"
                d="M64.79,78.33V30.69H42.1V.25H.27c-.07,0,.07,207,.09,207H123.24V78.33ZM57.25,97.55H6.62V92H57.25Zm0,7.86v5.8H6.69v-5.8ZM6.68,145.66H57.26v5.81H6.68Zm0-21.06v-5.81H57.27v5.81ZM57.25,70.67H6.68V65H57.25ZM6.68,57.22v-5.8H57.22v5.8Zm30-35.58H7.16V16.76H36.63ZM7.08,6.58h29.5v4.9H7.08Zm2,31.22c15.38.09,30.76,0,46.14.05.62,0,1.25.07,2,.11v5.9H6.57a25.64,25.64,0,0,0,0-3.31C6.25,38.41,7,37.78,9.09,37.8ZM54.78,165.25c-13.46-.08-26.92,0-40.38,0H6.55a42.45,42.45,0,0,0,0-4.26c-.17-1.57.49-1.89,1.83-1.89q23.64,0,47.26,0c1.47,0,1.92.58,1.79,2a5.82,5.82,0,0,0,0,1.56C57.78,164.83,56.78,165.27,54.78,165.25ZM107,88.7h10v9.9H107Zm0,21.68h10v9.89H107ZM89.58,88.77H99.75v9.85H89.58Zm0,21.58H99.72v9.87H89.56ZM72.36,88.72H82.52v9.86H72.36Zm10.13,74.74H72.29v-9.9h10.2Zm-10.12-21.7V132H82.49v9.77Zm10.17-21.5H72.31v-10H82.54Zm6.87,13c0-.46.68-1.25,1.06-1.26,3-.11,6.1-.06,9.27-.06v9.93H89.36C89.36,138.71,89.31,136,89.41,133.21Zm10.41,30.32H89.6v-10H99.82Zm17.15.06H106.74c0-3.15,0-6.12.05-9.08a1.57,1.57,0,0,1,1.06-1.1c3-.09,6,0,9.12,0Zm.09-21.81H107V132h10Z"
              />
            </g>
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Hotel
