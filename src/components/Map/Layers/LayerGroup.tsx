import React, { useCallback, useState } from "react"
import LayerCheckbox from "./LayerCheckbox"
import { MapLayerGroup } from "../../Types/MapLayerGroup"

import LAYERS from "../../../static/layers.json"

interface IProps {
  layerGroup: MapLayerGroup
}

const LayerGroup = ({ layerGroup }: IProps): JSX.Element => {
  const [allChecked, setAllChecked] = useState(false)
  const [expanded, setExpanded] = useState(true)
  const [checkedTs, setCheckedTs] = useState(0)

  const toggleExpanded = useCallback(() => {
    setExpanded(!expanded)
  }, [expanded, setExpanded])

  const toggleCheckAll = useCallback(() => {
    setAllChecked(!allChecked)
    setCheckedTs(+new Date())
  }, [setAllChecked, setCheckedTs])

  const layers = Object.values(LAYERS)
    .filter(layer => layer.grouping === layerGroup.id)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(layer => {
      return (
        <LayerCheckbox
          key={layer.id}
          layer={layer}
          checked={allChecked}
          checkedTs={checkedTs}
        />
      )
    })

  return (
    <div className="LayerGroup pb-2">
      <div className="d-flex align-items-baseline justify-content-between">
        <h6 className="mb-1">
          {layerGroup.name}
        </h6>
        <p className="mb-1">
          <button
            className="btn btn-sm btn-xs btn-outline-secondary ml-2"
            onClick={toggleCheckAll}
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
        </p>
      </div>
      <div>{layers}</div>
    </div >
  )
}

export default LayerGroup
