import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import CargoShip from '../../PlaceableSVGs/Maritime/CargoShip'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

const CargoShippingPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 0 && onClick) {
      onClick('Lorem ipsum shipping')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <CargoShip
        narrativeStage={narrativeStage}
        xOffset={narrativeStage <= 1 ? 0.03 : 0.04}
        yOffset={
          narrativeStage === 0 ? 0.75 : narrativeStage === 1 ? 0.74 : 0.72
        }
        rotate={narrativeStage <= 1 ? 0 : 4}
      />
      <Textbox xOffset={0.07} yOffset={0.9}>
        Cargo &amp; Shipping
      </Textbox>
    </svg>
  )
}

export default CargoShippingPop
