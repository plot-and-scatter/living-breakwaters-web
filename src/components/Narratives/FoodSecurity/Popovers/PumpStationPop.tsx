import React, { useCallback } from 'react'

import { useEffect } from 'react'
import { useNarrative } from '../../NarrativeContext'
import { useRef } from 'react'
import ALink from '../../../Layout/ALink'
import Gear from '../../PlaceableSVGs/Buildings/Gear'
import NewPumpStation from '../../PlaceableSVGs/Buildings/NewPumpStation'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

const STAGE_2_CONTENT = (
  <p>
    Pump stations help pump rain and ground water “behind” dikes into the ocean
    or rivers. The capacity to collect, convey and discharge stormwater flows to
    the ocean will be reduced by higher ocean water levels. Reduced discharge
    capacity and/or failures of pump stations could cause flooding of adjoining
    properties and, in neighborhoods served, disrupt access to homes, jobs, and
    recreation areas leading to potentially significant consequences.{' '}
    <ALink
      external
      href="http://www.adaptingtorisingtides.org/portfolio/storm-water/"
    >
      Click here for more information.
    </ALink>
  </p>
)

const STAGE_3_CONTENT = (
  <p>
    Rising sea levels, increased heavy rain events, and storm surges will make
    many existing stormwater management systems and pump stations obsolete,
    causing flooding of areas behind the dike during rain events.
  </p>
)

const PumpStationPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const rotateGear = useRef<gsap.core.Tween>()

  const onClickText = useCallback(() => {
    if (onClick) {
      if (narrativeStage === 2) onClick(STAGE_2_CONTENT)
      else if (narrativeStage === 3) onClick(STAGE_3_CONTENT)
      else onClick(undefined)
    }
  }, [narrativeStage, onClick])

  useEffect(() => {
    rotateGear.current = gsap
      .to('#Gear', {
        rotation: 360,
        duration: 2,
        ease: 'none',
        repeat: -1,
        paused: true,
        transformOrigin: 'center center',
        yoyo: true
      })
      .timeScale(0)
  }, [])

  useEffect(() => {
    if (narrativeStage === 2) {
      rotateGear.current?.play()
      gsap.to(rotateGear.current!, { timeScale: 1, duration: 2, delay: 5 })
    } else {
      // Pause
      console.log('HERE')
      gsap.to(rotateGear.current!, {
        timeScale: 0,
        duration: 3,
        onInterrupt: function () {
          this.pause()
        },
        onComplete: function () {
          this.pause()
        }
      })
    }
  }, [narrativeStage])

  const extraClasses = narrativeStage > 1 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <NewPumpStation xOffset={0.268} yOffset={0.7525} />
      <Gear xOffset={0.3315} yOffset={0.753} />
      <Textbox xOffset={0.325} yOffset={0.9} textboxWidth={130}>
        Pump Station
      </Textbox>
    </svg>
  )
}

export default PumpStationPop
