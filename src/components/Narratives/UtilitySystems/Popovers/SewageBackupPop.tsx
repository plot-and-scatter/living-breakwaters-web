import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import SewerLarge from '../../PlaceableSVGs/Objects/SewerLarge'

const SewageBackupPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 0 && onClick) {
      onClick('Lorem ipsum retail')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <SewerLarge scale={0.6} xOffset={0.38} yOffset={0.737} />
      <Textbox xOffset={0.67} yOffset={0.93} textboxWidth={140}>
        Sewage Backup
      </Textbox>
    </svg>
  )
}

export default SewageBackupPop
