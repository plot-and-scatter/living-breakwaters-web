import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import House1 from '../../PlaceableSVGs/Buildings/House1'
import Tree from '../../PlaceableSVGs/Trees/Tree'
import ManDog from '../../PlaceableSVGs/People/ManDog'
import ALink from '../../../Layout/ALink'

const STAGE_3_CONTENT = (
  <p>
    Flooding as a result of sea level rise and storm surges will negatively
    impact coastal parks at all levels (municipal, state, and national).
    Temporary and permanent flooding will limit access, as well as the overall
    green space per individual, which is often distributed inequitably in urban
    areas.{' '}
    <ALink
      external
      href="https://www.forbes.com/sites/lauriewinkless/2021/07/27/could-sponge-cities-help-us-prepare-for-our-flooded-future/?sh=4cece65c21d1"
    >
      {' '}
      This Forbes article
    </ALink>{' '}
    discusses how so-called “sponge-cities” may help us prepare for increased
    flooding of urban areas.
  </p>
)

export const contentMap = {
  3: STAGE_3_CONTENT
}

const ParkPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 2 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
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
