import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import NewPumpStation from '../../PlaceableSVGs/Buildings/NewPumpStation'
import Gear from '../../PlaceableSVGs/Buildings/Gear'
import { useEffect } from 'react'
import { useRef } from 'react'

const PumpStationPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const rotateGear = useRef<gsap.core.Tween>()

  const onClickText = useCallback(() => {
    if (narrativeStage > 1 && onClick) {
      onClick('Lorem ipsum pump station')
    } else {
      onClick(undefined)
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
