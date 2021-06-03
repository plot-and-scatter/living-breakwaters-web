import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Gantry.scss'

const Gantry = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Gantry'}
      viewBoxObj={viewBox(0, 0, 62.2, 97.47)}
      defaultScale={0.06}
      {...props}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS">
          <g id="gantry">
            <path
              className="cls-1"
              d="M.77,0V27.85h5.4l-4.65,60H0v9.65H5.12V87.82H3.58L17.74,12.58h9.92v4.49L30.54,20V37.73l1.4,2.92v7L26,60.72h12.9L32.71,47.61v-7h-.07l1.48-2.92v-18l2.94-2.69V12.58h7.82L58.34,87.82H57.08v9.65H62.2V87.82H60.8L54.14,12.58H62.2V0Zm37.1,60.06H27.07L32.2,48.74ZM58.55,9.66H3.86V7.19H58.55Z"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Gantry
