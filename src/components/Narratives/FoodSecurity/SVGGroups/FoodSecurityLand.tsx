import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, TimelineMax, gsap } from 'gsap'

import React, { useEffect, useRef } from 'react'
import FoodSecurityBaseLayers from '../BaseLayers/FoodSecurityBaseLayers'
import SaturatedGround from '../BaseLayers/SaturatedGround'

import FixTypeLater from '../../../../@types/FixTypeLater'
import { useNarrative } from '../../NarrativeContext'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

import './FoodSecurityLand.scss'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import { SVG_FRAME_X, SVG_FRAME_Y } from '../../Frames/SVGFrame'
import FoodSecurityRainOverflow from '../BaseLayers/FoodSecurityRainOverflow'

const itemHelper = (objClass: string, id: number, index: number) => {
  return gsap.to(
    `#groundwater-0 .${objClass}`,
    {
      morphSVG: {
        shape: `#groundwater-${id} .${objClass}`,
        shapeIndex: 0
      },
      ease: Power2.easeInOut,
      duration: 1
    } as FixTypeLater, // NB: the morphSVG argument is not in the GSAP typings
    index as FixTypeLater
  )
}

const chainHelper = (id: number) => {
  return [
    itemHelper('higher-sea-level', id, id - 1),
    itemHelper('saltwater-wedge', id, id - 1),
    itemHelper('fresh-water', id, id - 1),
    itemHelper('mean-sea-level', id, id - 1),
    itemHelper('ground', id, id - 1),
    itemHelper('storm-surge', id, id - 1),
    itemHelper('rain-overflow', id, id - 1)
  ]
}

interface Props extends PlaceableSVGProps {}

const FoodSecurityLand = (props: Props): JSX.Element => {
  const { narrativeStage } = useNarrative()
  const prevNarrativeStage = useRef(narrativeStage)

  const timeline = useRef<TimelineMax>()

  useEffect(() => {
    timeline.current = new TimelineMax({ paused: true })
    timeline.current.add(chainHelper(1))
    timeline.current.add(chainHelper(2))
    timeline.current.add(chainHelper(3))
  }, [])

  useEffect(() => {
    timeline.current.tweenFromTo(prevNarrativeStage.current, narrativeStage)
    // console.log(timeline.current)
    prevNarrativeStage.current = narrativeStage
  }, [narrativeStage])

  return (
    <PlaceableSVG
      extraClasses="FoodSecurityLand"
      viewBoxObj={viewBox(0, 0, SVG_FRAME_X, SVG_FRAME_Y)}
      {...props}
    >
      <g id="BaseLayers" data-name="Base Layers">
        <FoodSecurityRainOverflow stage={narrativeStage} />
        <FoodSecurityBaseLayers
          stage={3}
          xOffset={0}
          scale={1}
          yOffset={0.52}
        />
        <FoodSecurityBaseLayers
          stage={2}
          xOffset={0}
          yOffset={0.52}
          scale={1}
        />
        <FoodSecurityBaseLayers
          stage={1}
          xOffset={0}
          scale={1}
          yOffset={0.52}
        />
        <FoodSecurityBaseLayers
          stage={0}
          xOffset={0}
          scale={1}
          yOffset={0.52}
        />

        <SaturatedGround />
      </g>
    </PlaceableSVG>
  )
}

export default FoodSecurityLand
