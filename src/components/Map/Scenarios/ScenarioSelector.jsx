import React from "react"

import image1 from "../../content/assets/images/jared-murray-NSuufgf-BME-unsplash-clipped.jpg"
import image2 from "../../content/assets/images/bre-smith-A_-piDJKVsY-unsplash-clipped.jpg"
import image3 from "../../content/assets/images/camilo-jimenez-vGu08RYjO-s-unsplash-clipped.jpg"
import image4 from "../../content/assets/images/dan-meyers-IQVFVH0ajag-unsplash-clipped.jpg"

const ScenarioSelector = () => {
  const scenarioClickCallback = useCallback(ids => {
    console.log("ids", ids)
    // Hide all existing layers
    Object.keys(this.addedLayers).forEach(addedLayerId => {
      console.log("addedLayerId", addedLayerId)
      this.map.setLayoutProperty(addedLayerId, "visibility", "none")
    })
    // Add new ones
    ids.forEach(id => {
      const layer = LAYERS[id]
      const layerIds = layer.layers ? layer.layers : [layer.id]
      layerIds.forEach(layerId => {
        if (this.addedLayers && this.addedLayers[layerId]) {
          // The layer is already on the map; toggle its visibility
          const visibility = "visible"
          // const layer = this.map.getLayer(id)
          this.map.setLayoutProperty(layerId, "visibility", visibility)
        } else {
          // This can only ever happen when the layer is first added, so we don't
          // need to test for whether the box has been checked or not
          this.addLayer(layer)
          this.addedLayers[layerId] = true
        }
      })
    })
  }, [])

  return (
    <div className="ScenarioSelector">
      <div className="Scenarios">
        <div>
          <button
            className={`btn btn-outline-dark ScenarioToggle
        ${this.state.showScenarioInteraction ? "Active" : ""}`}
            onClick={() =>
              this.setState(
                {
                  showScenarioInteraction: !this.state.showScenarioInteraction,
                },
                () => {
                  console.log(
                    "currentShowScenarioInteraction",
                    this.state.showScenarioInteraction
                  )
                }
              )
            }
          >
            <i className="fas fa-layer-group mr-1" /> Scenarios
          </button>
        </div>
        <div
          className="ScenarioInteraction"
          style={{
            display: this.state.showScenarioInteraction ? "flex" : "none",
          }}
        >
          {Object.values(SCENARIOS)
            .sort((a, b) => a.index - b.index)
            .map((s, i) => {
              const image =
                i === 0 ? image1 : i === 1 ? image2 : i === 2 ? image3 : image4
              return (
                <div key={s.id} className="ScenarioCardWrapper">
                  <ScenarioCard
                    scenario={s}
                    image={image}
                    scenarioClickCallback={this.scenarioClickCallback}
                  />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default ScenarioSelector
