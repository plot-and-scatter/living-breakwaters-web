import React from 'react'

import LayerGroup from './LayerGroup'

import LAYER_GROUPS from '../../../static/layer_groups.json'

import './Layers.scss'

const LayerSelect = (): JSX.Element => {
  const layerGroups = Object.values(LAYER_GROUPS)
    .sort((a, b) => b.index - a.index)
    .map((layerGroup) => {
      return <LayerGroup key={layerGroup.id} layerGroup={layerGroup} />
    })

  const groupSize = 2
  const cols = layerGroups
    .reduce(function (r, element, index) {
      // create element groups with size 3, result looks like:
      // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
      index % groupSize === 0 && r.push([])
      r[r.length - 1].push(element)
      return r
    }, [])
    .map(function (rowContent, index) {
      // surround every group with 'col'
      return (
        <div className="col-4" key={index}>
          {rowContent}
        </div>
      )
    })

  return <div className="LayerSelect row">{cols}</div>
}

export default LayerSelect
