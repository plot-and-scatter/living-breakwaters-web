import React, { useCallback, useState } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import './Popover.scss'
import Crane from '../../PlaceableSVGs/Maritime/Crane'
import Gantry from '../../PlaceableSVGs/Maritime/Gantry'
import CargoContainers from '../../PlaceableSVGs/Maritime/CargoContainers'
import PortContamination from '../../PlaceableSVGs/Overlays/PortContamination'

const PortPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  // const [showContamination, setShowContamination] = useState<boolean>(false)

  const onClickText = useCallback(() => {
    if (narrativeStage > 0 && onClick) {
      onClick('Lorem ipsum port')
      // setShowContamination(true)
    } else {
      onClick(undefined)
      // setShowContamination(false)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <Crane xOffset={0.12} yOffset={0.661} />
      <Gantry xOffset={0.27} yOffset={0.705} />
      <CargoContainers xOffset={0.228} yOffset={0.779} />
      {narrativeStage >= 2 && (
        <PortContamination yOffset={0.88} extraClasses={'DoNotHighlight'} />
      )}
      <Textbox xOffset={0.25} yOffset={0.9} textboxWidth={60}>
        Port
      </Textbox>
    </svg>
  )
}

export default PortPop
