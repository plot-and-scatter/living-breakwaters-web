import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import SewerLarge from '../../PlaceableSVGs/Objects/SewerLarge'
import { useRef } from 'react'
import { useEffect } from 'react'
import ALink from '../../../Layout/ALink'

const STAGE_2_CONTENT = (
  <p>
    When treatment systems become overloaded from sea level rise combined with
    high tides and storms, communities will flood from backed up sewers.{' '}
    <ALink
      external
      href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017EF000805"
    >
      This article discusses
    </ALink>{' '}
    how people impacted by sea level rise due to loss of wastewater services
    could be five times as high as previous predictions of the number of people
    who experience direct flooding of their homes or property.
  </p>
)

const STAGE_3_CONTENT = (
  <p>
    If no actions are undertaken, sewage backup will happen more frequently,
    even in the absence of a storm or high tide.
  </p>
)

export const contentMap = {
  2: STAGE_2_CONTENT,
  3: STAGE_3_CONTENT
}

const SewageBackupPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

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
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <SewerLarge scale={0.6} xOffset={0.38} yOffset={0.737} />
      <Textbox xOffset={0.67} yOffset={0.93} textboxWidth={140}>
        Sewage Backup
      </Textbox>
    </svg>
  )
}

export default SewageBackupPop
