import React, { useCallback, useState } from "react"

import ScenarioCard from "./ScenarioCard"

import SCENARIOS from "../../../static/scenarios.json"
import "./Scenarios.scss"
import image1 from "../../../../content/assets/images/jared-murray-NSuufgf-BME-unsplash-clipped.jpg"
import image2 from "../../../../content/assets/images/bre-smith-A_-piDJKVsY-unsplash-clipped.jpg"
import image3 from "../../../../content/assets/images/camilo-jimenez-vGu08RYjO-s-unsplash-clipped.jpg"
import image4 from "../../../../content/assets/images/dan-meyers-IQVFVH0ajag-unsplash-clipped.jpg"

const Scenarios = (): JSX.Element => {
  const [showScenarios, setShowScenarios] = useState<boolean>(false)

  const toggleShowScenariosCallback = useCallback(() => {
    setShowScenarios(!showScenarios)
  }, [showScenarios, setShowScenarios])

  const classes = `btn btn-outline-dark ScenarioToggle ${
    showScenarios ? "Active" : ""
  }`

  return (
    <div className="Scenarios">
      <div>
        <button className={classes} onClick={toggleShowScenariosCallback}>
          <i className="fas fa-layer-group mr-1" /> Scenarios
        </button>
      </div>
      <div
        className="ScenarioInteraction"
        style={{
          display: showScenarios ? "flex" : "none",
        }}
      >
        {Object.values(SCENARIOS)
          .sort((a, b) => a.index - b.index)
          .map((s, i) => {
            const image =
              i === 0 ? image1 : i === 1 ? image2 : i === 2 ? image3 : image4
            return (
              <div key={s.id} className="ScenarioCardWrapper">
                <ScenarioCard scenario={s} image={image} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Scenarios
