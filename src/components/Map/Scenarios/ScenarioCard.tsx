import React, { useCallback } from 'react'
import { useMapLayerManager } from '../../Data/MapLayerManager'
import { FixTypeLater } from '../../Types/FixTypeLater'

import './ScenarioCard.scss'

interface IProps {
  scenario: FixTypeLater
  image: FixTypeLater
}

const ScenarioCard = ({ scenario, image }: IProps): JSX.Element => {
  const { showLayer } = useMapLayerManager()

  const title = scenario.title
  const intro = scenario.intro

  const scenarioClickCallback = useCallback(() => {
    showLayer(scenario.layerIds)
  }, [showLayer])

  return (
    <div
      className="ScenarioCard card"
      style={{
        whiteSpace: 'normal',
        verticalAlign: 'top'
      }}
      onClick={scenarioClickCallback}
    >
      <img src={image} className="card-img-top" alt="" />
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-body">
        <p className="card-text Intro">{intro}</p>
      </div>
    </div>
  )
}

export default ScenarioCard
