import React, { useCallback } from 'react'

import { MapLayerGroup } from '../../../@types/MapLayerGroup'
import { useMapManager } from '../../Data/MapLayerManager'

import LAYERS from '../../../static/layers.json'

interface Props {
  layerGroup: MapLayerGroup
}

const LayerGroupToggleButton = ({ layerGroup }: Props): JSX.Element => {
  const { showLayer, hideLayer, activeLayers } = useMapManager()

  const layersInGroup = Object.values(LAYERS).filter(
    (layer) => layer.grouping === layerGroup.id
  )

  const allChecked = layersInGroup.every(
    (layer) => activeLayers[layer.id] === true
  )

  const onClickCallback = useCallback(() => {
    if (allChecked) {
      // All are checked, so we want to uncheck them all
      hideLayer(layersInGroup.map((layer) => layer.id))
    } else {
      // Not all checked, so we want to check them all
      showLayer(layersInGroup.map((layer) => layer.id))
    }
  }, [showLayer, hideLayer])

  return (
    <button
      className="btn btn btn-sm btn-xs btn-outline-secondary ml-2"
      onClick={onClickCallback}
    >
      {allChecked ? (
        <>
          <i className="fas fa-times mr-1" />
          Uncheck all
        </>
      ) : (
        <>
          <i className="fas fa-check mr-1" />
          Check all
        </>
      )}
    </button>
  )
}

export default LayerGroupToggleButton
