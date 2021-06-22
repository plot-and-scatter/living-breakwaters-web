import React from 'react'

import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './FoodSecurityGround.scss'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const FoodSecurityGround = (props: Props): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(10, 0, 1200, 50)}
      {...props}
      extraClasses={'FoodSecurityGround'}
    >
      <path
        className="cls-1"
        d={
          'M511.84,11.9l2.92-.15c3.62-.38,7.37.81,14.49.41l81.85.53a19.23,19.23,0,0,1,2.15-.12h596.11a30.89,30.89,0,0,1,30.88,30.88v63.92c0,17-13.83,21.88-30.88,21.88H12a10,10,0,0,1-10-10c0-5.5-4.91-77.37.58-77.38,59-.1,96.63-4.37,98.47-4.37s23.88-2.07,30.51-3.76a31.41,31.41,0,0,1,4.71-.84l25.51-2.51,41.7-4.17c.44,0,128.9-6.38,129.34-6.48C340.37,18.12,354.37,9.67,366,2.91A20.87,20.87,0,0,1,376.45.08c13.37,0,46.43-.16,47.25,0,18.88,1,25.24,5.75,30.49,11.07a20.54,20.54,0,0,0,10.9,5.93l.11,0c5.6,1,10.58-1.51,14.69-3a28.8,28.8,0,0,1,8.91-1.67Z'
        }
      />
    </PlaceableSVG>
  )
}

export default FoodSecurityGround
