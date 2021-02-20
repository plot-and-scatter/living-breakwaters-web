import React from 'react'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import { SVG_FRAME_X, SVG_FRAME_Y } from '../../Frames/SVGFrame'
import Farmhouse from '../../PlaceableSVGs/Buildings/Farmhouse'
import Well from '../../PlaceableSVGs/Buildings/Well'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'
import Cypress from '../../PlaceableSVGs/Trees/Cypress'
import Oak from '../../PlaceableSVGs/Trees/Oak'
import Roots from '../../PlaceableSVGs/Trees/Roots'
import Truck from '../../PlaceableSVGs/Vehicles/Truck'

interface Props extends PlaceableSVGProps {
  stage: number
  isWellPopoverOpen: boolean
}

const SubsidingGroup = (props: Props): JSX.Element => {
  const { stage, isWellPopoverOpen } = props

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, SVG_FRAME_X, SVG_FRAME_Y)}
      {...props}
    >
      <Farmhouse
        xOffset={0.68}
        yOffset={0.491}
        scale={0.07}
        rotate={stage === 2 ? 5 : 0}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'Red' : ''}
      />
      <Truck xOffset={0.755} yOffset={0.57} scale={0.04} />
      <Well
        extraClasses={isWellPopoverOpen ? 'Red' : ''}
        xOffset={0.64}
        yOffset={0.78}
        scale={0.0095}
      />
      <Well
        extraClasses={isWellPopoverOpen ? 'Red' : ''}
        xOffset={0.9}
        yOffset={0.788}
        scale={0.0095}
      />
      <Oak xOffset={0.635} yOffset={0.435} scale={0.07} />
      <Roots xOffset={0.783} yOffset={0.675} scale={0.03} />
      <Oak xOffset={0.76} yOffset={0.42} scale={0.08} />
      <Cypress xOffset={0.84} yOffset={0.41} scale={0.02} />
      <Cypress xOffset={0.855} yOffset={0.41} scale={0.02} />
    </PlaceableSVG>
  )
}

export default SubsidingGroup
