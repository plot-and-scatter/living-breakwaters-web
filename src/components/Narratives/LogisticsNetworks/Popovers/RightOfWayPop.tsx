import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import Tree from '../../PlaceableSVGs/Trees/Tree'
import Train from '../../PlaceableSVGs/Vehicles/Train'
import Truck3 from '../../PlaceableSVGs/Vehicles/Truck3'

const RightOfWayPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 1 && onClick) {
      onClick('Lorem ipsum right of way')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 1 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <Tree xOffset={0.44} yOffset={0.75} />
      <Train xOffset={0.488} yOffset={0.785} />
      <Tree xOffset={0.52} yOffset={0.75} />
      <Truck3 xOffset={0.57} yOffset={0.793} />
      <Textbox xOffset={0.53} yOffset={0.9} textboxWidth={150}>
        Freight Transport
      </Textbox>
    </svg>
  )
}

export default RightOfWayPop
