import { SVG_FRAME_X } from '../Frames/SVGFrame'
import { ViewBox } from '../../../@types/ViewBox'

export const attributesForPlacedItem = (
  widthPc = 0.5,
  xPc = 0.5,
  yPc = 0.5
): { width: string; x: string; y: string } => {
  const scale = widthPc
  const placedItemWidth = scale * 100 // * SVG_FRAME_X
  const placedItemLeftXPercent = xPc
  const placedItemCenterYPercent = yPc
  const placedItemXPC = placedItemLeftXPercent * 100 // * SVG_FRAME_X - placedItemWidth / 2
  const placedItemYPC = placedItemCenterYPercent * 100 - 50

  return {
    width: `${placedItemWidth}%`,
    x: `${placedItemXPC}%`,
    y: `${placedItemYPC}%`
  }
}

export const viewBox = (
  x: number,
  y: number,
  width: number,
  height: number
): ViewBox => {
  return { x, y, width, height }
}
