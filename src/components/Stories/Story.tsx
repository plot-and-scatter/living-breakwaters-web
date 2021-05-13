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

  useEffect(() => {
    const element = storyRef.current
    gsap.fromTo(
      element.querySelector('.first-paragraph'),
      {
        autoAlpha: 0,
        y: -20
      },
      {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector('.first'),
          start: 'top top',
          end: 'bottom center',
          scrub: true
        }
      }
    )
  }, [])

  useEffect(() => {
    const element = storyRef.current
    gsap.fromTo(
      element.querySelector('#gsap-logo'),
      {
        opacity: 0,
        scale: 0.2,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('.first'),
          start: 'top center',
          end: 'bottom top',
          scrub: true
        }
      }
    )
  }, [])

  useEffect(() => {
    const element = storyRef.current
    gsap.from(element!.querySelector('.line'), {
      scale: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: element.querySelector('.third'),
        scrub: true,
        start: 'top bottom',
        end: 'top top'
      }
    })
  }, [])

  return (
    <div className="Story" ref={storyRef}>
      <SEO title="Story" />
      <JumpTo path={path} />
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
      <div className="row mt-5">
        <div className="col-12 col-md-9 col-lg-6 offset-md-1 offset-lg-2">
          <p>{intro}</p>
        </div>
      </div>
      <div className="row my-5" id="map">
        <div
          className="col-6 col-md-5 offset-md-1"
          style={{
            borderRadius: 0,
            border: 'solid 1px #333',
            height: '602px'
          }}
        >
          <MapLayerManagerProvider>
            {/* <div className="row"> */}
            <MapComponent
              colWidth={12}
              scenarioKey={scenarioKey}
              lockScenario
            />
            {/* TODO: hide layers list; use Legend button instead */}
            {/* TODO: add link to full map */}
            {/* </div> */}
          </MapLayerManagerProvider>
        </div>
        <div className="col-6 col-md-4">{mapText}</div>
      </div>
      <div className="row my-5" id="map">
        <div
          className="col-9 offset-1"
          style={{
            borderRadius: 0,
            border: 'solid 1px #333',
            height: '602px'
          }}
        >
          <MapLayerManagerProvider>
            {/* <div className="row"> */}
            <MapComponent
              colWidth={12}
              scenarioKey={scenarioKey}
              lockScenario
            />
            {/* TODO: hide layers list; use Legend button instead */}
            {/* TODO: add link to full map */}
            {/* </div> */}
          </MapLayerManagerProvider>
        </div>
        <div className="col-1" style={{ backgroundColor: '#eee' }}></div>
      </div>
      <div className="row my-5">
        <div className="col-6 col-md-4 offset-md-1">{narrativeText}</div>
        <div className="col-6 col-md-5" id="narrative">
          <Tableau activeNarrative={activeNarrative} />
          {/* Make the image static and cover the width of the screen; as we scroll, we update the narrative image */}
        </div>
      </div>
      <div className="row my-5">
        <div className="col-8 offset-2" id="strategies">
          <Subhead>Strategies</Subhead>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-8 offset-2" id="resources">
          <Subhead>Resources</Subhead>
        </div>
      </div>
    </div>
  )
}

export default Story
