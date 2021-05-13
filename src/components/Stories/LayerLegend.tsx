import React from 'react'
import { useMapManager } from '../Data/MapLayerManager'
import LayerLabel from '../Map/Layers/LayerLabel'

const LayerLegend = (): JSX.Element => {
  const { activeLayers } = useMapManager()

  const activeLayerKeys = Object.keys(activeLayers).filter(
    (layerKey) => activeLayers[layerKey] === true
  )

  return (
    <div
      className="LayerLegend"
      style={{
        border: 'solid 1px #eee',
        fontSize: '0.8rem',
        padding: '0.5rem'
      }}
    >
      {activeLayerKeys.map((layerKey: string) => (
        <LayerLabel key={layerKey} layerId={layerKey} />
      ))}
    </div>
  )
}

export default LayerLegend
