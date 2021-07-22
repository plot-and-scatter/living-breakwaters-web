import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import Bicyclist from '../../PlaceableSVGs/People/Bicyclist'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import Tree from '../../PlaceableSVGs/Trees/Tree'

export const contentMap = {}

const BikePathPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 2 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <Tree xOffset={0.28} yOffset={0.67} scale={0.06} />
      <Bicyclist xOffset={0.318} yOffset={0.74} scale={0.007} />
      <Tree xOffset={0.32} yOffset={0.667} scale={0.06} />
      <Textbox xOffset={0.3} yOffset={0.93} textboxWidth={90}>
        Bike Path
      </Textbox>
    </svg>
  )
}

export default BikePathPop
