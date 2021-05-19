/* globals gsap, ScrollTrigger */

import React, { useEffect, useRef, useState } from 'react'

import { MapLayerManagerProvider } from '../Data/MapLayerManager'
import LayerLegend from './LayerLegend'
import MapComponent from '../Map/Map'

const MAP_HEIGHT = 500

export interface StoryMapProps {
  mapText: React.ReactNode
  scenarioKey: string
}

interface Props extends StoryMapProps {
  storyRef: React.MutableRefObject<HTMLDivElement>
}

const StoryMap = ({ mapText, scenarioKey, storyRef }: Props): JSX.Element => {
  useEffect(() => gsap.registerPlugin(ScrollTrigger), [])

  const [mapScenarioKey, setMapScenarioKey] = useState<string>()

  const mapRef = useRef(null)

  useEffect(() => {
    // TODO: make the map zoom slower; show layers first, then zoom
    const element = mapRef.current
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

          onEnter: (): void => {
            setMapScenarioKey(scenarioKey)
          }
        }
      }
    )
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
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
          // markers: true,
          pin: element.querySelector('.MapTableau'),
          // pinReparent: true,

          onUpdate: (scrollTrigger): void => {
            if (mapRef.current) {
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
      }
    )
  }, [])

  return (
    <div className="StoryMap row my-5" id="map">
      <div className="col-12">
        <div className="MapTableau">
          <MapLayerManagerProvider>
            <div
              style={{
                pointerEvents: 'none',
                borderRadius: 0,
                border: 'solid 1px #333',
                height: `${MAP_HEIGHT + 2}px`
              }}
            >
              <MapComponent
                colWidth={12}
                scenarioKey={mapScenarioKey}
                lockScenario
                mapHeightOverride={MAP_HEIGHT}
              />
            </div>
            <div className="row mt-3">
              <div className="col-4 col-sm-2 offset-sm-1">
                <LayerLegend />
              </div>
              <div
                ref={mapRef}
                className="MapText col-8 col-sm-6 offset-sm-1"
                style={{
                  backgroundColor: '#fff',
                  // width: '50vw',
                  // marginLeft: '25vw',
                  height: '30vw',
                  overflowY: 'hidden'
                }}
              >
                {mapText}
              </div>
            </div>
          </MapLayerManagerProvider>
        </div>
      </div>
    </div>
  )
}

export default StoryMap
