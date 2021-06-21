import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, TimelineMax, gsap } from 'gsap'
import React from 'react'

import NarrativeStageProps from '../../../../@types/NarrativeStageProps'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

const WIDTH = 2000
const BASE_HEIGHT = 85

const FoodSecurityRainOverflow = ({
  stage
}: NarrativeStageProps): JSX.Element => {
  const d = stage < 2 ? `M290 250 v22 h710 v-22` : `M290 240 v22 h900 v-22`

  console.log('stage', stage)

  return (
    <>
      <path className="rain-overflow" d={d} />
    </>
  )
}

export default FoodSecurityRainOverflow
