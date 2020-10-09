import React from "react"
import PropTypes from "prop-types"

import LAYERS from '../../../static/layers.json'

interface IProps {
  layerId: string
  children?: React.ReactNode
}

const LayerLabel = ({ children, layerId }: IProps) => {
  const layer = LAYERS[layerId]

  if (!layer) {
    return <div>Loading...</div>
  }

  const splitColorR = parseInt(layer.color.substring(1, 3), 16)
  const splitColorG = parseInt(layer.color.substring(3, 5), 16)
  const splitColorB = parseInt(layer.color.substring(5), 16)

  const threshold = 80

  const color =
    splitColorR > threshold &&
      splitColorG > threshold &&
      splitColorB > threshold
      ? "black"
      : "white"

  return (
    <div
      key={layer.id}
      className="LayerLabel"
      style={{ backgroundColor: layer.color, color, padding: "2px 4px" }}
    >
      {children || layer.name}
    </div>
  )
}

export default LayerLabel

LayerLabel.propTypes = {
  layer: PropTypes.object,
  children: PropTypes.node,
}
