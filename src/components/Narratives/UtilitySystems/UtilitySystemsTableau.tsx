import React, { useEffect } from 'react'

import { useNarrative } from '../NarrativeContext'
import Birds from '../PlaceableSVGs/Fauna/Birds'
import DouglasFir from '../PlaceableSVGs/Trees/DouglasFir'
import Fish from '../PlaceableSVGs/Fauna/Fish'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import Land from './SVGGroups/Land'
import SVGFrame from '../Frames/SVGFrame'
import Tree from '../PlaceableSVGs/Trees/Tree'
import Well from '../PlaceableSVGs/Buildings/Well'

import '../PlaceableSVGs/Elements.scss'
import './UtilitySystemsTableau.scss'

interface Props {
  setFrameContent?: (content: React.ReactNode) => void
}

const UtilitySystemsTableau = ({ setFrameContent }: Props): JSX.Element => {
  const { narrativeStage, setShowRain } = useNarrative()

  useEffect(() => {
    if (narrativeStage === 2) {
      setShowRain(true)
    } else {
      setShowRain(false)
    }
  }, [narrativeStage])

  return (
    <div className="UtilitySystemsTableau">
      <SVGFrame id="UtilitySystemsTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <Land />
        <Fish xOffset={0.05} yOffset={0.79} />
        <Birds xOffset={0.2} yOffset={0.3} />
        <DouglasFir xOffset={0.79} yOffset={0.515} scale={0.1} />

        <Tree xOffset={0.38} yOffset={0.67} scale={0.06} />
        <Tree xOffset={0.41} yOffset={0.64} scale={0.08} />
        <Tree xOffset={0.63} yOffset={0.655} scale={0.07} />

        <Well xOffset={0.64} yOffset={0.842} />
      </SVGFrame>
    </div>
  )
}

export default UtilitySystemsTableau
