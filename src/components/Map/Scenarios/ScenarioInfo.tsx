import React from 'react'

import SCENARIOS from '../../../static/scenarios.json'
import { useMapLayerManager } from '../../Data/MapLayerManager'

interface Props {
  scenarioKey: string
}

import './ScenarioInfo.scss'

const ScenarioInfo = ({ scenarioKey }: Props): JSX.Element => {
  const { flyTo } = useMapLayerManager()

  if (!scenarioKey) return <></>

  const scenario = SCENARIOS[scenarioKey]
  return (
    <div className="ScenarioInfo">
      <div
        className="d-flex align-items-center"
        style={{ justifyContent: 'space-between' }}
      >
        <h4 className="mb-0">{scenario.title}</h4>
        <button
          className="btn btn-sm btn-outline-dark"
          onClick={() => flyTo(scenario.flyTo)}
        >
          <i className="fas fa-bullseye mr-2" />
          Refocus
        </button>
      </div>
      <hr className="my-2" />
      <p className="mb-0" style={{ lineHeight: 1.3 }}>
        <small>{scenario.intro}</small>
        <button className="btn btn-sm btn-primary">
          See narrative <i className="fas ml-2 fa-arrow-right" />
        </button>
      </p>
    </div>
  )
}

export default ScenarioInfo
