import React, { useCallback, useState } from "react"
import { useMapLayerManager } from "../../Data/MapLayerManager"
import { FixTypeLater } from "../../Types/FixTypeLater"
import LayerLabel from "./LayerLabel.jsx"
import LayerSelect from "./LayerSelect.jsx"

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
        {/* {Object.keys(activeLayers).length > 0 && !showLayers && (
          <div className="ActiveLayers">
            {Object.values(activeLayers).map((l: FixTypeLater) => (
              <LayerLabel key={l.id} layer={l}>
                {l.name}
              </LayerLabel>
            ))}
          </div>
        )} */}
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
