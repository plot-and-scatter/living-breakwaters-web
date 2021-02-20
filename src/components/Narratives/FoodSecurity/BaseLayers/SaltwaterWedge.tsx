import React from 'react'

import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const SaltwaterWedge = (props: Props): JSX.Element => {
  const d =
    props.stage === 0
      ? 'M1051.3 355.1l-166.4.5-85.8-2.5-108.7-6.1-59.1-6.8a60.7 60.7 0 00-6.1 1.8c-12.9 4.5-25.4 4-38.5 3.7-9.5-.2-19.1.3-28.7.3-22.3 0-44.3 3-66.4 4.7-24.4 1.8-48.7 1-73 .8-39.6-.3-79 .7-118.6 3.7-8.7.7-17.3.2-25.8 3.8-10.1 4.3-19.8 3-30 2.7-12.4-.4-24.8.9-37.1 1.6-17.2 1-34 4-50.8 7.6C104.3 382.2 52.8 395 0 403.4v139.8h1963V354.4z'
      : props.stage === 1
      ? 'M1051.3 355.1l-166.4.5-85.8-2.5-108.7-6.1-59.1-6.8a60.7 60.7 0 00-6.1 1.8c-12.9 4.5-25.4 4-38.5 3.7-9.5-.2-19.1.3-28.7.3-22.3 0-44.3 3-66.4 4.7-24.4 1.8-48.7 1-73 .8-39.6-.3-79 .7-118.6 3.7-8.7.7-17.3.2-25.8 3.8-10.1 4.3-19.8 3-30 2.7-12.4-.4-24.8.9-37.1 1.6-17.2 1-34 4-50.8 7.6C104.3 382.2 52.8 395 0 403.4v139.8h1963V354.4z'
      : 'M1053.2 366.3l-172.2-3-121.4-2.6-30.5-.7-27-.6c-2 .5-74.8-18.2-76.9-17.5-12.8 4.5-25.4 4-38.4 3.8-9.6-.2-19.1.3-28.7.3-22.3 0-44.3 3-66.5 4.6-24.3 1.9-48.6 1-73 .8-39.5-.2-79 .7-118.5 3.8-8.7.6-17.3.2-25.8 3.8-10.1 4.2-19.8 3-30 2.7-12.5-.4-24.8.9-37.1 1.5-17.3 1-34 4-50.8 7.7C104.3 382.2 52.8 395 0 403.4v139.8h1963v-177z'

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 1960, 520)}
      {...props}
      extraClasses={'SaltwaterWedge'}
    >
      <path className="saltwater-wedge" d={d} transform="translate(0 -24.2)" />
    </PlaceableSVG>
  )
}

export default SaltwaterWedge
