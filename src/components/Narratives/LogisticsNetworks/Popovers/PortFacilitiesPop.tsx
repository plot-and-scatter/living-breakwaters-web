import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import Crane from '../../PlaceableSVGs/Maritime/Crane'
import Gantry from '../../PlaceableSVGs/Maritime/Gantry'
import CargoContainers from '../../PlaceableSVGs/Maritime/CargoContainers'
import PortContamination from '../../PlaceableSVGs/Overlays/PortContamination'
import Warehouse from '../../PlaceableSVGs/Buildings/Warehouse'

const STAGE_2_CONTENT = (
  <p>
    Sea level rise and storm surges will lead to periodic overtopping and
    flooding of port facilities. This may lead to soil, groundwater, and surface
    water pollution, due to the spillage of wastewater, nitrogen, sulfur oxides,
    and volatile organic compounds.
  </p>
)

export const contentMap = {
  2: STAGE_2_CONTENT
}

const PortFacilitiesPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 1 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <Crane xOffset={0.12} yOffset={0.661} />
      <Gantry xOffset={0.27} yOffset={0.705} />
      <CargoContainers xOffset={0.228} yOffset={0.779} />
      {narrativeStage >= 2 && (
        <PortContamination yOffset={0.88} extraClasses={'DoNotHighlight'} />
      )}
      <Warehouse xOffset={0.34} yOffset={0.77} />
      <Textbox xOffset={0.3} yOffset={0.9} textboxWidth={120}>
        Port Facilities
      </Textbox>
    </svg>
  )
}

export default PortFacilitiesPop
