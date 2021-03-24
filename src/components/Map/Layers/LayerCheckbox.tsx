import React, { useCallback, useEffect, useState } from 'react'

import { useMapManager } from '../../Data/MapLayerManager'
import FixTypeLater from '../../../@types/FixTypeLater'
import LayerLabel from './LayerLabel'

interface Props {
  layer: FixTypeLater
}

const LayerCheckbox = ({ layer }: Props): JSX.Element => {
  const { showLayer, hideLayer, activeLayers } = useMapManager()

  const [checked, setIsChecked] = useState(activeLayers[layer.id])

  useEffect(() => {
    setIsChecked(activeLayers[layer.id])
  }, [activeLayers])

  const onCheckboxChange = useCallback(
    (event) => {
      event.target.checked
        ? showLayer(event.target.id)
        : hideLayer(event.target.id)
    },
    [showLayer, hideLayer]
  )

  return (
    <LayerLabel layer={layer}>
      <small>
        <div className="form-check">
          <input
            type="checkbox"
            id={layer.id}
            name={layer.id}
            value={layer.id}
            className="form-check-input"
            onChange={onCheckboxChange}
            checked={checked ?? false}
          />
          <label htmlFor={layer.id} className="form-check-label">
            {layer.name}
          </label>
        </div>
      </small>
    </LayerLabel>
  )
}

export default LayerCheckbox
