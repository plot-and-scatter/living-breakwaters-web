export type MapLayer = {
  "name": string,
  "id": string
  "color": string
  "opacity": number
  "type": 'fill'
    | 'line'
    | 'symbol'
    | 'circle'
    | 'fill-extrusion'
    | 'raster'
    | 'background'
    | 'heatmap'
    | 'hillshade'
  "grouping": string
  "layers"?: MapLayer[]
  "line-weight"?: number
  "line-dasharray"?: number[],
}