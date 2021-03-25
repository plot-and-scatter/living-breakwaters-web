import React, { useCallback, useMemo, useState } from 'react'

import { MapLayerGroup } from '../../../@types/MapLayerGroup'
import LayerCheckbox from './LayerCheckbox'

import LAYERS from '../../../static/layers.json'
import { useMapManager } from '../../Data/MapLayerManager'
import LayerGroupToggleButton from './LayerGroupToggleButton'

interface IProps {
  layerGroup: MapLayerGroup
}

const LayerGroup = ({ layerGroup }: IProps): JSX.Element => {
  const { showLayer, hideLayer, activeLayers } = useMapManager()

  const layers = Object.values(LAYERS)
    .filter((layer) => layer.grouping === layerGroup.id)
    .sort((a, b) => a.name.localeCompare(b.name))

  const layerCheckboxes = useMemo(
    () =>
      layers.map((layer) => {
        return <LayerCheckbox key={layer.id} layer={layer} />
      }),
    [layers]
  )

  return (
    <div className="LayerGroup pb-2">
      <div className="d-flex align-items-baseline justify-content-between">
        <h6 className="mb-1">{layerGroup.name}</h6>
        <p className="mb-1">
          <LayerGroupToggleButton layerGroup={layerGroup} />
        </p>
      </div>
      <div>{layerCheckboxes}</div>
    </div>
  )
}

export default LayerGroup
