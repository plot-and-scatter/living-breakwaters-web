import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import ALink from '../../../Layout/ALink'
import CargoShip from '../../PlaceableSVGs/Maritime/CargoShip'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

const STAGE_1_CONTENT = (
  <p>
    Due to the interconnected nature of logistics, climate change and sea level
    rise may impact and disrupt cargo and shipping operations to and from port
    facilities.{' '}
    <ALink
      external
      href="https://link.springer.com/article/10.1057/s41278-018-0114-z"
    >
      This open access article
    </ALink>{' '}
    discusses the impacts of disruption of European port operations to
    non-coastal regions that connect to ports through road, rail and inland
    waterways networks, but which rely on ports for their import or export of
    goods.
  </p>
)

const STAGE_2_CONTENT = (
  <p>
    Due to the interconnected nature of logistics, climate change and sea level
    rise will significantly impact and disrupt cargo and shipping operations to
    and from port facilities.
  </p>
)

export const contentMap = {
  1: STAGE_1_CONTENT,
  2: STAGE_2_CONTENT
}

const CargoShippingPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <CargoShip
        narrativeStage={narrativeStage}
        xOffset={0.03}
        yOffset={
          narrativeStage === 0 ? 0.75 : narrativeStage === 1 ? 0.74 : 0.72
        }
        // rotate={narrativeStage <= 1 ? 0 : 4}
      />
      <Textbox xOffset={0.07} yOffset={0.9}>
        Cargo &amp; Shipping
      </Textbox>
    </svg>
  )
}

export default CargoShippingPop
