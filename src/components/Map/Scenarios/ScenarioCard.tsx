import React, { useCallback } from "react"
import PropTypes from "prop-types"
import { useMapLayerManager } from "../../Data/MapLayerManager"

import "./ScenarioCard.scss"

interface IProps {
  scenario: any
  image: any
}

const ScenarioCard = ({ scenario, image }: IProps) => {
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
        whiteSpace: "normal",
        verticalAlign: "top",
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

ScenarioCard.propTypes = {
  scenario: PropTypes.object,
  image: PropTypes.string,
  scenarioClickCallback: PropTypes.func,
}

export default ScenarioCard
