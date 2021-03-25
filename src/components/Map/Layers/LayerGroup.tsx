import React, { useCallback, useMemo, useState } from 'react'

import { MapLayerGroup } from '../../../@types/MapLayerGroup'
import LayerCheckbox from './LayerCheckbox'

import LAYERS from '../../../static/layers.json'

interface IProps {
  layerGroup: MapLayerGroup
}

const LayerGroup = ({ layerGroup }: IProps): JSX.Element => {
  const [expanded, setExpanded] = useState(true)

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

  const toggleExpanded = useCallback(() => {
    setExpanded(!expanded)
  }, [expanded, setExpanded])

  return (
    <div className="LayerGroup pb-2">
      <div className="d-flex align-items-baseline justify-content-between">
        <h6 className="mb-1">{layerGroup.name}</h6>
        <p className="mb-1">
          {/* <button
            className="btn btn-sm btn-xs btn-outline-secondary ml-2"
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
          </button> */}
        </p>
      </div>
      <div>{layerCheckboxes}</div>
    </div>
  )
}

export default LayerGroup
