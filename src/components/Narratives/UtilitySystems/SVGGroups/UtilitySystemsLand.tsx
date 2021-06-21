import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, TimelineMax, gsap } from 'gsap'

import React, { useEffect, useRef } from 'react'
import BaseLayerStage from '../BaseLayers/UtilitySystemsBaseLayers'

import FixTypeLater from '../../../../@types/FixTypeLater'
import { useNarrative } from '../../NarrativeContext'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

import './UtilitySystemsLand.scss'

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
    itemHelper('ground', id, id - 1),
    itemHelper('sea-surge', id, id - 1)
  ]
}

const UtilitySystemsLand = (): JSX.Element => {
  const { narrativeStage } = useNarrative()
  const prevNarrativeStage = useRef(narrativeStage)

  const timeline = useRef<TimelineMax>()

  useEffect(() => {
    timeline.current = new TimelineMax({ paused: true })
    timeline.current.add(chainHelper(1))
    timeline.current.add(chainHelper(2))
  }, [])

  useEffect(() => {
    timeline.current.tweenFromTo(prevNarrativeStage.current, narrativeStage)
    // console.log(timeline.current)
    prevNarrativeStage.current = narrativeStage
  }, [narrativeStage])

  return (
    <g id="BaseLayers" data-name="Base Layers" opacity="1">
      <BaseLayerStage stage={2} xOffset={0} yOffset={0.7} scale={1} />
      <BaseLayerStage stage={1} xOffset={0} yOffset={0.7} scale={1} />
      <BaseLayerStage stage={0} xOffset={0} yOffset={0.7} scale={1} />
    </g>
  )
}

export default UtilitySystemsLand
