import React from 'react'

import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { MapLayerManagerProvider } from '../Data/MapLayerManager'
import { NarrativeType } from '../../@types/NarrativeType'
import BannerRow from '../Rows/BannerRow'
import MapComponent from '../Map/Map'
import SEO from '../SEO'
import Tableau from '../Narratives/Tableau'
import Subhead from '../Layout/Subhead'

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
  return (
    <div className="Story">
      <SEO title="Story" />
      <div className="row">
        <div
          style={{
            color: 'white',
            position: 'fixed',
            top: '4.5rem',
            zIndex: 2000
          }}
          className="offset-11 col-1"
        >
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              border: 'solid 1px black',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              color: 'white'
            }}
          >
            <p
              style={{
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#aaa',
                fontSize: '0.8rem'
              }}
            >
              Jump to...
            </p>
            <h6>
              <AnchorLink to={`${path}#intro`}>Intro</AnchorLink>
            </h6>
            <h6>
              <AnchorLink to={`${path}#map`}>Map</AnchorLink>
            </h6>
            <h6>
              <AnchorLink to={`${path}#narrative`}>Narrative</AnchorLink>
            </h6>
            <h6>
              <AnchorLink to={`${path}#strategies`}>Strategies</AnchorLink>
            </h6>
            <h6>
              <AnchorLink to={`${path}#resources`}>Resources</AnchorLink>
            </h6>
          </div>
        </div>
      </div>
      <BannerRow bgOpacity={0.3} bgImage={imageSrc} short>
        <a id="intro" />
        <div className="col-8 offset-2">
          <p className="Cutout mb-5">{title}</p>
        </div>
        <div
          className="lead col-6 offset-2"
          style={{ textShadow: '0px 1px #000' }}
        >
          {lead}
        </div>
      </BannerRow>
      <div className="row mt-5">
        <div className="col-6 offset-2">
          <p>{intro}</p>
        </div>
      </div>
      <div className="row my-5" id="map">
        <div
          className="col-5 offset-1"
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
        <div className="col-4">{mapText}</div>
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
        <div className="col-4 offset-1">{narrativeText}</div>
        <div className="col-5" id="narrative">
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
