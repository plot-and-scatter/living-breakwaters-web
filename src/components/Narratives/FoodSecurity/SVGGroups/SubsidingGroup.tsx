import React from 'react'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import { SVG_FRAME_X, SVG_FRAME_Y } from '../../Frames/SVGFrame'
import Farmhouse from '../../PlaceableSVGs/Buildings/Farmhouse'
import Well from '../../PlaceableSVGs/Buildings/Well'
import Irrigation from '../../PlaceableSVGs/Objects/Irrigation'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'
import Bush1 from '../../PlaceableSVGs/Plants/Bush1'
import Wheat from '../../PlaceableSVGs/Plants/Wheat'
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
      <Irrigation xOffset={0.45} yOffset={0.59} scale={0.18} rotate={-1} />
      <Wheat
        rotate={stage === 2 ? 30 : 0}
        xOffset={0.455}
        yOffset={0.6}
        scale={0.015}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'RedOutline Red' : ''}
      />
      <Wheat
        rotate={stage === 2 ? 30 : 0}
        xOffset={0.475}
        yOffset={0.6}
        scale={0.015}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'RedOutline Red' : ''}
      />
      <Wheat
        rotate={stage === 2 ? 30 : 0}
        xOffset={0.495}
        yOffset={0.6}
        scale={0.015}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'RedOutline Red' : ''}
      />
      <Wheat
        rotate={stage === 2 ? 30 : 0}
        xOffset={0.51}
        yOffset={0.595}
        scale={0.015}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'RedOutline Red' : ''}
      />
      <Wheat
        rotate={stage === 2 ? 30 : 0}
        xOffset={0.53}
        yOffset={0.595}
        scale={0.015}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'RedOutline Red' : ''}
      />
      <Wheat
        rotate={stage === 2 ? 30 : 0}
        xOffset={0.55}
        yOffset={0.595}
        scale={0.015}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'RedOutline Red' : ''}
      />
      <Wheat
        rotate={stage === 2 ? 30 : 0}
        xOffset={0.57}
        yOffset={0.59}
        scale={0.015}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'RedOutline Red' : ''}
      />
      <Wheat
        rotate={stage === 2 ? 30 : 0}
        xOffset={0.59}
        yOffset={0.59}
        scale={0.015}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'RedOutline Red' : ''}
      />
      <Wheat
        rotate={stage === 2 ? 30 : 0}
        xOffset={0.61}
        yOffset={0.59}
        scale={0.015}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'RedOutline Red' : ''}
      />
      <Oak xOffset={0.635} yOffset={0.435} scale={0.07} />
      <Roots xOffset={0.783} yOffset={0.675} scale={0.03} />
      <Oak xOffset={0.76} yOffset={0.42} scale={0.08} />
      <Cypress xOffset={0.84} yOffset={0.41} scale={0.02} />
      <Cypress xOffset={0.855} yOffset={0.41} scale={0.02} />
      <Bush1
        xOffset={0.88}
        yOffset={0.57}
        scale={0.02}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'Red' : ''}
      />
      <Bush1
        xOffset={0.91}
        yOffset={0.57}
        scale={0.02}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'Red' : ''}
      />
      <Bush1
        xOffset={0.93}
        yOffset={0.57}
        scale={0.02}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'Red' : ''}
      />
      <Bush1
        xOffset={0.95}
        yOffset={0.57}
        scale={0.02}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'Red' : ''}
      />
      <Bush1
        xOffset={0.97}
        yOffset={0.57}
        scale={0.02}
        extraClasses={isWellPopoverOpen && stage === 2 ? 'Red' : ''}
      />
    </PlaceableSVG>
  )
}

export default SubsidingGroup
