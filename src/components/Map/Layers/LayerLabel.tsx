import React from 'react'

import { MapLayer } from '../../../@types/MapLayer'

import LAYERS from '../../../static/layers.json'

interface IProps {
  layer?: MapLayer
  layerId?: string
  children?: React.ReactNode
}

const BASE_LEGEND_SIZE = 15

const LayerLabel = ({ children, layer: layerProp, layerId }: IProps) => {
  const layer: MapLayer = layerProp || LAYERS[layerId]

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
      ? 'black'
      : 'white'

  const opacity = Math.min(layer.opacity + 0.1, 1)

  const labelShape = (
    <div>
      <svg
        style={{ minWidth: `${BASE_LEGEND_SIZE}px` }}
        width={BASE_LEGEND_SIZE * 1.5}
        height={BASE_LEGEND_SIZE}
        className="mr-2"
      >
        {layer.type === 'fill' && (
          <rect
            width={BASE_LEGEND_SIZE * 1.5 - 1}
            height={BASE_LEGEND_SIZE - 1}
            fill={layer.color}
            fillOpacity={opacity}
            stroke={`#333`}
            strokeWidth={`1px`}
            x={0.5}
            y={0.5}
          />
        )}
        {layer.type === 'line' && (
          <>
            <line
              y1={BASE_LEGEND_SIZE / 2 - layer['line-weight'] / 2 - 1}
              y2={BASE_LEGEND_SIZE / 2 - layer['line-weight'] / 2 - 1}
              x1={0}
              x2={BASE_LEGEND_SIZE * 1.5}
              stroke={`#333`}
              strokeWidth={`1px`}
              strokeOpacity={1}
              strokeDasharray={
                layer['line-dasharray'] ? layer['line-dasharray'].join(' ') : ''
              }
            />
            <line
              y1={BASE_LEGEND_SIZE / 2 + layer['line-weight'] / 2 + 1}
              y2={BASE_LEGEND_SIZE / 2 + layer['line-weight'] / 2 + 1}
              x1={0}
              x2={BASE_LEGEND_SIZE * 1.5}
              stroke={`#333`}
              strokeWidth={`1px`}
              strokeOpacity={1}
              strokeDasharray={
                layer['line-dasharray'] ? layer['line-dasharray'].join(' ') : ''
              }
            />
            <line
              y1={BASE_LEGEND_SIZE / 2}
              y2={BASE_LEGEND_SIZE / 2}
              x1={0}
              x2={BASE_LEGEND_SIZE * 1.5}
              stroke={layer.color}
              strokeWidth={layer['line-weight'] + 1}
              strokeOpacity={opacity}
              strokeDasharray={
                layer['line-dasharray'] ? layer['line-dasharray'].join(' ') : ''
              }
            />
          </>
        )}
        {layer.type === 'circle' && (
          <circle
            cx={(BASE_LEGEND_SIZE * 1.5) / 2}
            cy={BASE_LEGEND_SIZE / 2}
            r={BASE_LEGEND_SIZE / 2 - 0.5}
            fill={layer.color}
            fillOpacity={opacity}
            stroke={`#333`}
            strokeWidth={`0.5px`}
          />
        )}
      </svg>
    </div>
  )

  // const bgColor = `rgba(${splitColorR}, ${splitColorG}, ${splitColorB}, 0.8)`

  return (
    <div
      key={layer.id}
      className="LayerLabel d-flex align-items-top"
      style={{
        padding: '2px 0px'
      }}
      // style={{ padding: '2px 4px' }}
    >
      {labelShape}
      <div>{children || layer.name}</div>
    </div>
  )
}

export default LayerLabel
