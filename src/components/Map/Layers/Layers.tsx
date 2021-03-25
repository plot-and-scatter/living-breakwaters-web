import React, { useCallback, useState } from 'react'

import { useMapManager } from '../../Data/MapLayerManager'
import LayerLabel from './LayerLabel'
import LayerSelect from './LayerSelect'

import './Layers.scss'

const Layers = (): JSX.Element => {
  const [showLayers, setShowLayers] = useState<boolean>(false)

  const { activeLayers } = useMapManager()

  const activeLayerKeys = Object.keys(activeLayers).filter(
    (layerKey) => activeLayers[layerKey] === true
  )

  const toggleShowLayersCallback = useCallback(() => {
    setShowLayers(!showLayers)
  }, [showLayers, setShowLayers])

  const classes =
    `btn btn-outline-dark LayerToggle ` +
    (showLayers ? 'Active ' : '') +
    (activeLayerKeys.length > 0 ? 'HasLayers ' : '')

  return (
    <div className="Layers">
      <div onClick={toggleShowLayersCallback} style={{ cursor: 'pointer' }}>
        <button className={classes} type="button">
          <i className="fas fa-layer-group mr-1" /> Layers
        </button>
        {activeLayerKeys.length > 0 && !showLayers && (
          <div className="ActiveLayers">
            {activeLayerKeys.map((layerKey: string) => (
              <LayerLabel key={layerKey} layerId={layerKey} />
            ))}
          </div>
        )}
      </div>
      <div
        className="LayerInteraction"
        style={{
          display: showLayers ? 'block' : 'none'
        }}
      >
        <LayerSelect />
      </div>
    </div>
  )
}

export default Layers
