import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import House1 from '../../PlaceableSVGs/Buildings/House1'
import Tree from '../../PlaceableSVGs/Trees/Tree'
import ManDog from '../../PlaceableSVGs/People/ManDog'

const ParkPop = (props: PlaceableSVGProps): JSX.Element => {
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
      {/* <Basement scale={0.0524} xOffset={0.729} yOffset={0.768} /> */}
      <Tree xOffset={0.42} yOffset={0.7} scale={0.035} />
      <ManDog xOffset={0.445} yOffset={0.732} />
      <Tree xOffset={0.47} yOffset={0.69} scale={0.04} />
      <Tree xOffset={0.49} yOffset={0.675} scale={0.05} />
      <Textbox xOffset={0.47} yOffset={0.93} textboxWidth={55}>
        Park
      </Textbox>
    </svg>
  )
}

export default ParkPop
