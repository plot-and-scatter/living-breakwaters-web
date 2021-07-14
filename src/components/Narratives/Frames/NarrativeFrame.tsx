import React, { useEffect, useState } from 'react'
import { NarrativeType } from '../../../@types/NarrativeType'

import { DEFAULT_CONTENT as CULTURAL_LANDSCAPES } from '../CulturalLandscapes/CulturalLandscapesTableau'
import { DEFAULT_CONTENT as FOOD_SECURITY } from '../FoodSecurity/FoodSecurityTableau'
import { DEFAULT_CONTENT as LOGISTICS_NETWORKS } from '../LogisticsNetworks/LogisticsNetworksTableau'
import { DEFAULT_CONTENT as UTILITY_SYSTEMS } from '../UtilitySystems/UtilitySystemsTableau'

import NarrativeSelect from '../NarrativeSelect'
import Tableau from '../Tableau'

import './NarrativeFrame.scss'
import { useNarrative } from '../NarrativeContext'

interface Props {
  activeNarrative: NarrativeType
}

const NarrativeFrame = ({ activeNarrative }: Props): JSX.Element => {
  const [frameContent, setFrameContent] = useState<React.ReactNode>()

  const { narrativeStage, setNarrativeStage, setShowRain } = useNarrative()

  useEffect(() => {
    setFrameContent(undefined)
    setNarrativeStage(0)
    setShowRain(false)
  }, [activeNarrative])

  useEffect(() => {
    setFrameContent(undefined)
  }, [narrativeStage])

  useEffect(() => {
    // console.log('frameContent', frameContent, activeNarrative)
    if (!frameContent) {
      switch (activeNarrative) {
        case NarrativeType.CulturalLandscapes:
          setFrameContent(CULTURAL_LANDSCAPES)
          break
        case NarrativeType.UtilitySystems:
          setFrameContent(UTILITY_SYSTEMS)
          break
        case NarrativeType.FoodSecurity:
          setFrameContent(FOOD_SECURITY)
          break
        case NarrativeType.LogisticsNetworks:
          setFrameContent(LOGISTICS_NETWORKS)
          break
      }
    }
  }, [activeNarrative, frameContent])

  return (
    <div className="NarrativeFrame row">
      <div className="col-12">
        <Tableau
          activeNarrative={activeNarrative}
          setFrameContent={setFrameContent}
        />
      </div>
      <div className="col-6 mt-4">
        <NarrativeSelect activeNarrative={activeNarrative} />
      </div>
      <div className="col-6 mt-4">{frameContent}</div>
    </div>
  )
}

export default NarrativeFrame
