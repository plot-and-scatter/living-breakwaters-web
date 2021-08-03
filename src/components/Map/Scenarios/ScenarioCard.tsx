import React, { useCallback, useEffect, useState } from 'react'
import { useMapManager } from '../../Data/MapLayerManager'
import FixTypeLater from '../../../@types/FixTypeLater'

import './ScenarioCard.scss'

interface IProps {
  scenario: FixTypeLater
  image: FixTypeLater
  setScenarioCallback: FixTypeLater
}

const ScenarioCard = ({
  scenario,
  image,
  setScenarioCallback
}: IProps): JSX.Element => {
  const { hideAllLayers, showLayer, flyTo } = useMapManager()

  const [time, setTime] = useState<number>(0)

  const title = scenario.title
  const intro = scenario.intro

  const scenarioClickCallback = useCallback(() => {
    setScenarioCallback(scenario.id)
    hideAllLayers()
    // showLayer(scenario.layerIds)
    // flyTo(scenario.flyTo)
    // TODO: Bunching up all these calls at once means the first call (to
    // hideAllLayers) gets clobbered by the later one (showLayer). Need to
    // investigate this.
    setTime(Date.now())
  }, [hideAllLayers, showLayer, flyTo])

  useEffect(() => {
    if (time) {
      showLayer(scenario.layerIds)
      flyTo(scenario.flyTo)
    }
  }, [time])

  // return (
  //   <div
  //     className="ScenarioCard card"
  //     style={{
  //       whiteSpace: 'normal',
  //       verticalAlign: 'top'
  //     }}
  //     onClick={scenarioClickCallback}
  //   >
  //     <img src={image} className="card-img-top" alt="" />
  //     <div className="card-header">
  //       <h4 className="card-title">{title}</h4>
  //     </div>
  //     <div className="card-body">
  //       <p className="card-text Intro">{intro}</p>
  //     </div>
  //   </div>
  // )

  return (
    <div
      className="ScenarioCard"
      style={{
        whiteSpace: 'normal',
        verticalAlign: 'top'
      }}
      onClick={scenarioClickCallback}
    >
      {/* <img src={image} className="card-img-top" alt="" /> */}
      {title}
      {/* <div className="card-body"> */}
      {/* <p className="card-text Intro">{intro}</p> */}
      {/* </div> */}
    </div>
  )
}

export default ScenarioCard
