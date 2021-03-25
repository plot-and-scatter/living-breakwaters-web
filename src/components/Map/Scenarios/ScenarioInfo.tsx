import React from 'react'

import SCENARIOS from '../../../static/scenarios.json'
import { useMapManager } from '../../Data/MapLayerManager'

interface Props {
  scenarioKey: string
  setScenarioCallback: FixTypeLater
}

import './ScenarioInfo.scss'

const ScenarioInfo = ({
  scenarioKey,
  setScenarioCallback
}: Props): JSX.Element => {
  const { flyTo } = useMapManager()

  if (!scenarioKey) return <></>

  const scenario = SCENARIOS[scenarioKey]
  return (
    <div className="ScenarioInfo">
      <div
        className="d-flex align-items-center"
        style={{ justifyContent: 'space-between' }}
      >
        <h4 className="mb-0">
          {scenario.title}{' '}
          <button
            className="btn btn-sm btn-outline-secondary ml-2"
            onClick={() => flyTo(scenario.flyTo)}
          >
            <i className="fas fa-bullseye mr-2" />
            Refocus
          </button>
        </h4>
        <div>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setScenarioCallback(undefined)}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      <hr className="my-2" />
      <p className="mb-0" style={{ lineHeight: 1.3 }}>
        <small>{scenario.intro}</small>
      </p>
      <button className="btn btn-sm btn-primary mt-2">
        See narrative <i className="fas ml-1 fa-arrow-right" />
      </button>
    </div>
  )
}

export default ScenarioInfo
