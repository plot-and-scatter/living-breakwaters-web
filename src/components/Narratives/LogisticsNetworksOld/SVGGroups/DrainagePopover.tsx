import React from 'react'

import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import { SVG_FRAME_X, SVG_FRAME_Y } from '../../Frames/SVGFrame'
import DrainPopover1 from '../Popovers/DrainPopover1'
import DrainPopover2 from '../Popovers/DrainPopover2'
import DrainPopover3 from '../Popovers/DrainPopover3'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const DrainagePopover = (props: Props): JSX.Element => {
  const { stage } = props

  let text

  if (stage === 0)
    text = `Drainage systems in place are adequate for the amount of impermeable surfaces currently developed and existing peak flow rates.`
  if (stage === 1)
    text = `Vancouver's public waterfront is at risk of inundation, with little in the way of adaptability or defenses to protect it.`
  if (stage === 2)
    text = `Rising sea levels will overwhelm the drainage points of our low-land drainage systems, causing stormwater overflow to pool within low-lying drainage points throughout the city.`

  return (
    <>
      <PlaceableSVG
        extraClasses="DrainagePopover"
        viewBoxObj={viewBox(0, 0, SVG_FRAME_X, SVG_FRAME_Y)}
        {...props}
      >
        {stage === 0 && <DrainPopover1 narrativeStage={stage} scale={1.2} />}
        {stage === 1 && <DrainPopover2 narrativeStage={stage} scale={1.2} />}
        {stage === 2 && <DrainPopover3 narrativeStage={stage} scale={1.2} />}
      </PlaceableSVG>
      <p>{text}</p>
    </>
  )
}

export default DrainagePopover
