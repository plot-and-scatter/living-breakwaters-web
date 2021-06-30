import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import PowerPlant from '../../PlaceableSVGs/Objects/PowerPlant'
import { useEffect } from 'react'
import FixTypeLater from '../../../../@types/FixTypeLater'

export const togglePowerOutage = (narrativeStage: number): void => {
  if (narrativeStage === 3) {
    const tl = new TimelineLite()
    tl.to('.Lights', {
      fill: 'black',
      duration: 1,
      delay: 4
    })
  } else {
    const tl = new TimelineLite()
    tl.to('.Lights', {
      fill: 'yellow',
      duration: 1,
      delay: 1
    })
  }

  const tlBlink = new TimelineLite({
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    delay: 3
  })
  tlBlink
    .to('.PowerPlant polygon.cls-3', {
      fill: 'yellow'
      // stroke: 'yellow'
    })
    .to('.PowerPlant polygon.cls-3', {
      fill: 'black'
      // stroke: 'black'
    })

  // tl.to(from, { rotate: -1 })
}

const PowerStationPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 0 && onClick) {
      onClick('Lorem ipsum retail')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  useEffect(() => {
    togglePowerOutage(narrativeStage)
  }, [narrativeStage])

  return (
    <>
      <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
        <PowerPlant scale={0.1} xOffset={0.5} yOffset={0.617} />
        <Textbox xOffset={0.55} yOffset={0.93} textboxWidth={120}>
          Power Station
        </Textbox>
      </svg>
      <path className="FillGround" d="M442 240 l 40 -2.5 v 5 h -40" />
    </>
  )
}

export default PowerStationPop
