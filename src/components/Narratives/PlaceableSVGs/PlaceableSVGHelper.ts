import { SVG_FRAME_X } from '../SVGFrame'
import { ViewBox } from '../../../@types/ViewBox'

export const attributesForPlacedItem = (
  widthPc = 0.5,
  xPc = 0.5,
  yPc = 0.5
): { width: number; x: number; y: string } => {
  const scale = widthPc
  const placedItemWidth = scale * SVG_FRAME_X
  const placedItemCenterXPercent = xPc
  const placedItemCenterYPercent = yPc
  const placedItemX =
    placedItemCenterXPercent * SVG_FRAME_X - placedItemWidth / 2
  const placedItemYPC = placedItemCenterYPercent * 100 - 50

  return {
    width: placedItemWidth,
    x: placedItemX,
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
