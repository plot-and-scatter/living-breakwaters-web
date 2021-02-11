import React from 'react'

type Props = {
  narrativeStage: number
}

const DikePopover = (props: Props): JSX.Element => {
  const { narrativeStage } = props

  console.log('narrativeStage', narrativeStage)

  switch (+narrativeStage) {
    case 2:
      return (
        <p>
          The entire intertidal zones are lost as sea levels continue to rise.
        </p>
      )
    case 1:
      return (
        <p>
          As sea level rises, the primary dike prevents the natural migration of
          the intertidal habitat inland.
        </p>
      )
    case 0:
    default:
      return (
        <p>
          A primary dike is constructed to support agricultural production in
          the intertidal zone.
        </p>
      )
  }
}

export default DikePopover
