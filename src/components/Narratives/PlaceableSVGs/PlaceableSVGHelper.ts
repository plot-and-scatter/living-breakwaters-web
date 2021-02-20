import { ViewBox } from '../../../@types/ViewBox'
import { SVG_FRAME_X, SVG_FRAME_Y } from '../Frames/SVGFrame'

export const attributesForPlacedItem = (
  widthPc = 1,
  xPc = 0.5,
  yPc = 0.5
): { width: number; x: number; y: number } => {
  const scale = widthPc

  const placedItemWidth = scale * SVG_FRAME_X
  const placedItemLeftXPercent = xPc
  const placedItemCenterYPercent = yPc
  const placedItemXPC = placedItemLeftXPercent * SVG_FRAME_X
  const placedItemYPC = (placedItemCenterYPercent - 0.5) * SVG_FRAME_Y

  console.log(
    'scale',
    scale,
    'placedItemWidth',
    placedItemWidth,
    'placedItemXPC',
    placedItemXPC
  )

  return {
    width: +`${placedItemWidth}`,
    x: +`${placedItemXPC}`,
    y: +`${placedItemYPC}`
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
