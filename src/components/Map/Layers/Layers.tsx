import React, { useCallback, useState } from "react"
import { useMapLayerManager } from "../../Data/MapLayerManager"
import LayerLabel from "./LayerLabel"
import LayerSelect from "./LayerSelect"

import "./Layers.scss"

const Layers = () => {
  const [showLayers, setShowLayers] = useState<boolean>(false)

  const { activeLayers } = useMapLayerManager()

  const toggleShowLayersCallback = useCallback(() => {
    setShowLayers(!showLayers)
  }, [showLayers, setShowLayers])

  const classes =
    `btn btn-outline-dark LayerToggle ` +
    (showLayers ? "Active" : "") +
    (activeLayers.length > 0 ? "HasLayers" : "")

  console.log('activeLayers', activeLayers)

  return (
    <div className="Layers">
      <div>
        <button
          className={classes}
          type="button"
          onClick={toggleShowLayersCallback}
        >
          <i className="fas fa-layer-group mr-1" /> Layers
        </button>
        {Object.keys(activeLayers).length > 0 && !showLayers && (
          <div className="ActiveLayers">
            {Object.keys(activeLayers).map((layerKey: string) => (
              <LayerLabel key={layerKey} layerId={layerKey} />
            ))}
          </div>
        )}
      </div>
      <div
        className="LayerInteraction"
        style={{
          display: showLayers ? "block" : "none",
        }}
      >
        <LayerSelect />
      </div>
    </div>
  )
}

export default Layers
