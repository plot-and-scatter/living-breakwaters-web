import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import Irrigation from '../../PlaceableSVGs/Objects/Irrigation'
import Wheat from '../../PlaceableSVGs/Plants/Wheat'
import Well from '../../PlaceableSVGs/Buildings/Well'
import ALink from '../../../Layout/ALink'

const STAGE_1_CONTENT = (
  <p>
    As sea levels rise, extraction of water from underground aquifers can lead
    to saltwater intrusion, which in turn may negatively impact soil fertility
    and crop productivity. Groundwater extraction also causes subsidence, which
    leads to increased flood risks.{' '}
    <ALink
      external
      isPDF
      href="http://lfs-mlws.sites.olt.ubc.ca/files/2018/10/Final-Copy-with-Les-and-Chloes-Edits-Aug-16.pdf"
    >
      This case study in Richmond, BC, provides more information on urban land
      subsidence
    </ALink>
    .
  </p>
)

const STAGE_2_CONTENT = (
  <p>
    As sea levels rise, extraction of water from underground aquifers can lead
    to saltwater intrusion, which in turn may negatively impact soil fertility
    and crop productivity.{' '}
    <ALink
      external
      href="https://www.climatehubs.usda.gov/index.php/hubs/northeast/topic/saltwater-intrusion-growing-threat-coastal-agriculture"
    >
      Click here for more information
    </ALink>
    .
  </p>
)

const STAGE_3_CONTENT = (
  <p>
    As sea levels rise, salt water intrusion may force farmer so shift to
    different modes of farming.{' '}
    <ALink
      external
      isPDF
      href="https://pics.uvic.ca/sites/default/files/uploads/publications/Strengthening%20BC%27s%20Agriculture%20Sector_0.pdf"
    >
      This report provides some suggestions how to strengthen BC’s Agricultural
      Sector in the face of climate change
    </ALink>
    .
  </p>
)

const IrrigationPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (onClick) {
      if (narrativeStage === 1) onClick(STAGE_1_CONTENT)
      else if (narrativeStage === 2) onClick(STAGE_2_CONTENT)
      else if (narrativeStage === 3) onClick(STAGE_3_CONTENT)
      else onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage >= 1 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <Irrigation xOffset={0.48} yOffset={0.735} />
      <Wheat xOffset={0.49} yOffset={0.745} />
      <Wheat xOffset={0.54} yOffset={0.745} />
      <Wheat xOffset={0.59} yOffset={0.745} />
      <Well xOffset={0.64} yOffset={0.842} />
      <Textbox xOffset={0.555} yOffset={0.85} textboxWidth={100}>
        Irrigation
      </Textbox>
    </svg>
  )
}

export default IrrigationPop
