/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

import { MapLayerManagerProvider } from '../Data/MapLayerManager'
import { NarrativeType } from '../../@types/NarrativeType'
import BannerRow from '../Rows/BannerRow'
import JumpTo from './JumpTo'
import MapComponent from '../Map/Map'
import SEO from '../SEO'
import Subhead from '../Layout/Subhead'
import Tableau from '../Narratives/Tableau'

import './Story.scss'

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

  useEffect(() => {
    const element = storyRef.current
    gsap.fromTo(
      element.querySelector('.NarrText'),
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: element.querySelector('.NarrText'),
          endTrigger: element.querySelector('.NarrText'),
          start: 'top 30%', // element, viewport
          end: 'bottom center',
          // scrub: true,
          markers: true,
          pin: element.querySelector('.NarrTableau')
          // pinReparent: true
        }
      }
    )
  }, [])

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
      {/* <div className="row my-5" id="map">
        <div
          className="col-6 col-md-5 offset-md-1"
          style={{
            borderRadius: 0,
            border: 'solid 1px #333',
            height: '602px'
          }}
        >
          <MapLayerManagerProvider>
            <MapComponent
              colWidth={12}
              scenarioKey={scenarioKey}
              lockScenario
            />
          </MapLayerManagerProvider>
        </div>
        <div className="col-6 col-md-4">{mapText}</div>
      </div> */}
      {/* <div className="row my-5" id="map">
        <div
          className="col-9 offset-1"
          style={{
            borderRadius: 0,
            border: 'solid 1px #333',
            height: '602px'
          }}
        >
          <MapLayerManagerProvider>
            <MapComponent
              colWidth={12}
              scenarioKey={scenarioKey}
              lockScenario
            />
            {/* TODO: hide layers list; use Legend button instead 
            {/* TODO: add link to full map 
          </MapLayerManagerProvider>
        </div>
        <div className="col-1" style={{ backgroundColor: '#eee' }}></div>
      </div> */}

      <div className="row" style={{ backgroundColor: '#fed' }}>
        <div className="col-8">
          <div className="NarrTableau">
            <Tableau activeNarrative={activeNarrative} />
          </div>
        </div>
        {/* Make the image static and cover the width of the screen; as we scroll, we update the narrative image */}
        <div className="col-4 NarrText">{narrativeText}</div>
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
