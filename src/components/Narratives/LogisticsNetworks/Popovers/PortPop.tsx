import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import './Popover.scss'
import Crane from '../../PlaceableSVGs/Maritime/Crane'
import Gantry from '../../PlaceableSVGs/Maritime/Gantry'
import CargoContainers from '../../PlaceableSVGs/Maritime/CargoContainers'

const PortPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 0 && onClick) {
      onClick('Lorem ipsum port')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <Crane xOffset={0.12} yOffset={0.661} />
      <Gantry xOffset={0.27} yOffset={0.705} />
      <CargoContainers xOffset={0.228} yOffset={0.779} />
      <Textbox xOffset={0.25} yOffset={0.9} textboxWidth={60}>
        Port
      </Textbox>
    </svg>
  )
}

export default PortPop
