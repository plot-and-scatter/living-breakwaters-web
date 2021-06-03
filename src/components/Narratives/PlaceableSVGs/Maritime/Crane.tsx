import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Crane.scss'

const Crane = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Crane'}
      viewBoxObj={viewBox(0, 0, 103.74, 133.89)}
      defaultScale={0.1}
      {...props}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS">
          <g id="crane">
            <path
              className="cls-1"
              d="M103.74,68.92V54.43H100V28.84H95.13L50.63,7.64,41.84,0l-37,22.13,1.35.43V77.42L0,84v16.06H13.84V84L7.67,77.42V22.72l25-11L54,33.09,65,68.92H80.74v3.72H76.25L65,99.66V120l.18,13.85h38.53V100.06L92.14,72.64H87.65V68.92ZM11.62,84.55H2.15l4.73-5.39ZM73.63,54H64.84L58.67,39.55l15,13.12Zm3.93,25.07h3.18v21H69.89ZM99.44,120H69.89V105.93H99.44ZM91.77,79.11l7.67,21H87.28v-21ZM84.85,52.67,37.35,11.36V9.2l9.91-.78L94.39,30.94Z"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Crane
