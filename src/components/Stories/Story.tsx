/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef, useState } from 'react'

import { MapLayerManagerProvider } from '../Data/MapLayerManager'
import { NarrativeType } from '../../@types/NarrativeType'
import BannerRow from '../Rows/BannerRow'
import JumpTo from './JumpTo'
import MapComponent from '../Map/Map'
import SEO from '../SEO'
import Subhead from '../Layout/Subhead'
import Tableau from '../Narratives/Tableau'

import './Story.scss'
import { useNarrative } from '../Narratives/NarrativeContext'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  activeNarrative: NarrativeType
  imageSrc: string
  intro: React.ReactNode
  lead: React.ReactNode
  scenarioKey: string
  title: string
  path: string
  mapText?: React.ReactNode
  narrativeText?: React.ReactNode
}

const MAP_HEIGHT = 400

const Story = ({
  activeNarrative,
  imageSrc,
  intro,
  lead,
  scenarioKey,
  title,
  path,
  mapText,
  narrativeText
}: Props): JSX.Element => {
  const storyRef = useRef(null)

  // useEffect(() => {
  //   const element = storyRef.current
  //   gsap.fromTo(
  //     element.querySelector('.NarrativeText'),
  //     {
  //       autoAlpha: 0
  //     },
  //     {
  //       autoAlpha: 1,
  //       scrollTrigger: {
  //         trigger: element.querySelector('.NarrativeText'),
  //         start: 'top bottom',
  //         end: 'bottom top',
  //         scrub: true,
  //         markers: true
  //       }
  //     }
  //   )
  // }, [])

  const { narrativeStage, setNarrativeStage } = useNarrative()

  const [mapScenarioKey, setMapScenarioKey] = useState<string>()

  const mapRef = useRef(null)

  useEffect(() => {
    // MAP EFFECT scrollspy
    const element = storyRef.current
    gsap.fromTo(
      element.querySelector('.MapText'),
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: element.querySelector('.MapTableau'),

          start: 'top center', // element, viewport
          end: 'bottom center',
          // scrub: true,
          // markers: true,

          onEnter: (scrollTrigger): void => {
            setMapScenarioKey(scenarioKey)
          }
        }
      }
    )
  }, [])

  useEffect(() => {
    // MAP EFFECT scrollspy
    const element = storyRef.current
    gsap.fromTo(
      element.querySelector('.MapText'),
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: element.querySelector('.MapTableau'),
          endTrigger: element.querySelector('.MapText'),
          start: 'top 80px', // element, viewport
          end: 'bottom center',
          // scrub: true,
          markers: true,
          pin: element.querySelector('.MapTableau'),
          // pinReparent: true,

          onUpdate: (scrollTrigger): void => {
            const progress = scrollTrigger.progress
            console.log(scrollTrigger)
            console.log(
              '-->',
              mapRef.current.offsetHeight,
              mapRef.current.scrollHeight
            )
            mapRef.current.scrollTop =
              progress *
              (mapRef.current.scrollHeight - mapRef.current.offsetHeight)
          }
        }
      }
    )
  }, [])

  const narrRef = useRef(null)

  useEffect(() => {
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
            const progress = scrollTrigger.progress
            console.log(scrollTrigger)
            console.log(
              '-->',
              narrRef.current.offsetHeight,
              narrRef.current.scrollHeight
            )
            narrRef.current.scrollTop =
              progress *
              (narrRef.current.scrollHeight - narrRef.current.offsetHeight)

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
    )
  }, [])

  // useEffect(() => {
  //   console.log(narrativeStage)
  // }, [narrativeStage])

  return (
    <div className="Story" ref={storyRef}>
      <SEO title="Story" />
      {/* <JumpTo path={path} /> */}
      <BannerRow bgOpacity={0.3} bgImage={imageSrc} short>
        <a id="intro" />
        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <p className="Cutout mb-5">{title}</p>
        </div>
        <div className="w-100" />
        <div
          className="lead col-12 col-md-8 offset-md-1 col-lg-6 offset-lg-2"
          style={{ textShadow: '0px 1px #000' }}
        >
          {lead}
        </div>
      </BannerRow>
      <div className="Intro row mt-5">
        <div className="col-12 col-md-9 col-lg-6 offset-md-1 offset-lg-2">
          <p>{intro}</p>
        </div>
      </div>
      <div className="row my-5" id="map">
        <div className="col-12">
          <div className="MapTableau">
            <div
              style={{
                borderRadius: 0,
                border: 'solid 1px #333',
                height: `${MAP_HEIGHT + 2}px`,
                pointerEvents: 'none'
              }}
            >
              <MapLayerManagerProvider>
                <MapComponent
                  colWidth={12}
                  scenarioKey={mapScenarioKey}
                  lockScenario
                  mapHeightOverride={MAP_HEIGHT}
                />
              </MapLayerManagerProvider>
            </div>
            <div
              ref={mapRef}
              className="MapText mt-3"
              style={{
                backgroundColor: '#fff',
                width: '50vw',
                marginLeft: '25vw',
                height: '30vw',
                overflowY: 'hidden'
              }}
            >
              {mapText}
            </div>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12">
          <div className="NarrTableau" style={{ backgroundColor: '#fff' }}>
            <Tableau activeNarrative={activeNarrative} />
            <div
              ref={narrRef}
              className="NarrText mt-3"
              style={{
                backgroundColor: '#fff',
                width: '50vw',
                marginLeft: '25vw',
                height: '30vw',
                overflowY: 'hidden'
              }}
            >
              {narrativeText}
            </div>
          </div>
        </div>
        {/* Make the image static and cover the width of the screen; as we scroll, we update the narrative image */}
      </div>
      <div className="row my-5 Strategies" style={{ height: '500px' }}>
        <div className="col-8 offset-2" id="strategies">
          <Subhead>Strategies</Subhead>
        </div>
      </div>
      <div className="row my-5" style={{ height: '500px' }}>
        <div className="col-8 offset-2" id="resources">
          <Subhead>Resources</Subhead>
        </div>
      </div>
    </div>
  )
}

export default Story
