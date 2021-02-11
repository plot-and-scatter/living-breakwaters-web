import React from 'react'

type Props = {
  narrativeStage: number
}

const WellPopover = (props: Props): JSX.Element => {
  const { narrativeStage } = props

  console.log('narrativeStage', narrativeStage)

  switch (+narrativeStage) {
    case 2:
      return (
        <p>
          As agricultural production intensifies, and ground water extraction
          increases subsidence occurs. This leads to slumping and sinking of the
          land surface and tilting of farm buildings.
        </p>
      )
    case 1:
      return (
        <p>
          Intense extraction of ground water leads to changes in ground water
          balance and increases salt water intrusion.
        </p>
      )
    case 0:
    default:
      return (
        <p>
          A pumping well is used to extract ground water from deep underground
          aquifers for the irrigation of agricultural crops.
        </p>
      )
  }
}

export default WellPopover
