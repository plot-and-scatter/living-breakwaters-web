import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import House1 from '../../PlaceableSVGs/Buildings/House1'
import Bicyclist from '../../PlaceableSVGs/People/Bicyclist'
import Tree from '../../PlaceableSVGs/Trees/Tree'

const BikePathPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 2 && onClick) {
      onClick('Lorem ipsum retail')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 2 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
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
