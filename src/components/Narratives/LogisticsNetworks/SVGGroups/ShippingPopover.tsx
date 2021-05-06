import React from 'react'

import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import { SVG_FRAME_X, SVG_FRAME_Y } from '../../Frames/SVGFrame'
import ShipPopover1 from '../Popovers/ShipPopover1'
import ShipPopover2 from '../Popovers/ShipPopover2'
import ShipPopover3 from '../Popovers/ShipPopover3'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const ShippingPopover = (props: Props): JSX.Element => {
  const { stage } = props

  return (
    <PlaceableSVG
      extraClasses="ShipagePopover"
      viewBoxObj={viewBox(0, 0, SVG_FRAME_X, SVG_FRAME_Y)}
      {...props}
    >
      {stage === 0 && <ShipPopover1 narrativeStage={stage} scale={1.2} />}
      {stage === 1 && <ShipPopover2 narrativeStage={stage} scale={1.2} />}
      {stage === 2 && <ShipPopover3 narrativeStage={stage} scale={1.2} />}
    </PlaceableSVG>
  )
}

export default ShippingPopover
