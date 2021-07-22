import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import SewerLarge from '../../PlaceableSVGs/Objects/SewerLarge'
import { useRef } from 'react'
import { useEffect } from 'react'

export const contentMap = {}

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

  const animatePipes = useRef<gsap.core.Tween>()

  // useEffect(() => {
  //   animatePipes.current = gsap
  //     .to('.Sewer line, .Sewer polyline', {
  //       strokeDashoffset: -40,
  //       duration: 2,
  //       ease: 'none',
  //       repeat: -1,
  //       paused: true,
  //       transformOrigin: 'center center',
  //       yoyo: false
  //     })
  //     .timeScale(0)
  // }, [])

  useEffect(() => {
    if (narrativeStage === 1) {
      const tl = new TimelineLite()
      tl.to('.Sewer line, .Sewer polyline', {
        duration: 1,
        delay: 2,
        stroke: '#99ccff'
      })
      tl.to(
        '.Sewer line, .Sewer polyline',
        {
          strokeDashoffset: -40,
          duration: 2,
          ease: 'none',
          repeat: -1,
          yoyo: false
        },
        '>-0.5'
      )
    } else if (narrativeStage === 2) {
      const tl = new TimelineLite()
      tl.to('.Sewer line, .Sewer polyline', {
        strokeDashoffset: -40,
        duration: 1.5,
        ease: 'none',
        repeat: -1,
        yoyo: true,
        delay: 1
      })
      tl.to(' .Sewer line,  .Sewer polyline', {
        duration: 0.6,
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true,
        stroke: '#ff7755'
      })
    } else {
      // Pause
      // const tl = new TimelineLite()
      // tl.to('.Sewer line, .Sewer polyline', {
      //   duration: 1,
      //   stroke: '#99ccff',
      //   strokeDashoffset: 0
      // })
    }
  }, [narrativeStage])

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
