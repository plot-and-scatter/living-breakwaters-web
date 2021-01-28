import { SVG_FRAME_X } from '../SVGFrame'

export const attributesForPlacedItem = (
  widthPc = 0.1,
  xPc = 0,
  yPc = 0
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
