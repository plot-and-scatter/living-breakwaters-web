import React, { useEffect, useRef } from 'react'

import { NarrativeType } from '../../@types/NarrativeType'
import { useNarrative } from '../Narratives/NarrativeContext'
import NarrativeToggleButtons from '../Narratives/NarrativeToggleButtons'
import Tableau from '../Narratives/Tableau'

export interface StoryNarrativeProps {
  activeNarrative: NarrativeType
  narrativeText?: React.ReactNode
  storyRef: React.MutableRefObject<HTMLDivElement>
}

const StoryNarrative = ({
  activeNarrative,
  narrativeText,
  storyRef
}: StoryNarrativeProps): JSX.Element => {
  useEffect(() => gsap.registerPlugin(ScrollTrigger), [])

  const {
    setNarrativeStage,
    showRain,
    showSurge,
    toggleRain,
    toggleSurge
  } = useNarrative()

  const narrativeRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    // NARRATIVE TEXT scrollspy
    const element = storyRef.current
    gsap.fromTo(
      element.querySelector('.NarrText'),
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: element.querySelector('.NarrTableau'),
          endTrigger: element.querySelector('.NarrText'),
          start: 'top 80px', // element, viewport
          end: 'bottom center',
          // scrub: true,
          // markers: true,
          pin: element.querySelector('.NarrTableau'),
          // pinReparent: true,

          onUpdate: (scrollTrigger): void => {
            if (narrativeRef.current) {
              const progress = scrollTrigger.progress
              console.log(scrollTrigger)
              console.log(
                '-->',
                narrativeRef.current.offsetHeight,
                narrativeRef.current.scrollHeight
              )
              narrativeRef.current.scrollTop =
                progress *
                (narrativeRef.current.scrollHeight -
                  narrativeRef.current.offsetHeight)

              if (progress < 0.33) {
                setNarrativeStage(0)
              } else if (progress < 0.67) {
                setNarrativeStage(1)
              } else {
                setNarrativeStage(2)
              }
            }
          }
        }
      }
    )
  }, [])

  return (
    <div className="StoryNarrative row my-5">
      <div className="col-12">
        <div className="NarrTableau" style={{ backgroundColor: '#fff' }}>
          <Tableau activeNarrative={activeNarrative} />
          <div className="row mt-3">
            <div className="col-4 col-sm-2 offset-sm-1">
              <div
                className="LayerLegend"
                style={{
                  border: 'solid 1px #eee',
                  fontSize: '0.8rem',
                  padding: '0.5rem'
                }}
              >
                <NarrativeToggleButtons />
              </div>
            </div>
            <div
              ref={narrativeRef}
              className="NarrText col-sm-6 offset-sm-1 col-8"
              style={{
                backgroundColor: '#fff',
                // width: '50vw',
                // marginLeft: '25vw',
                height: '30vw',
                overflowY: 'hidden'
              }}
            >
              {narrativeText}
            </div>
          </div>
        </div>
      </div>
      {/* Make the image static and cover the width of the screen; as we scroll, we update the narrative image */}
    </div>
  )
}

export default StoryNarrative
