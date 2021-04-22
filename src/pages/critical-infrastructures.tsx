import { graphql } from 'gatsby'
import React, { useState } from 'react'

import { NarrativeType } from '../@types/NarrativeType'
import FixTypeLater from '../@types/FixTypeLater'
import Layout from '../components/Layout/Layout'
import NarrativeFrame from '../components/Narratives/Frames/NarrativeFrame'
import NarrativeSelection from '../components/Narratives/Selection/NarrativeSelection'
import MapComponent from '../components/Map/Map'
import SEO from '../components/SEO'

import image from '../../content/assets/images/zan-baldwin-5Q_-dz0hsNo-unsplash.jpg'

import './Story.scss'
import BannerRow from '../components/Rows/BannerRow'
import { MapLayerManagerProvider } from '../components/Data/MapLayerManager'
import Tableau from '../components/Narratives/Tableau'

const Story = (props: FixTypeLater): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <div className="Story">
        <SEO title="Story" />
        <div className="row">
          <div
            style={{
              color: 'white',

              position: 'fixed',
              top: '4.5rem'

              // width: '200px'
            }}
            className="offset-11 col-1"
          >
            <div
              style={{
                // marginRight: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                border: 'solid 1px black',
                padding: '0.5rem',
                borderRadius: '0.5rem'
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
              <h6>Intro</h6>
              <h6>Map</h6>
              <h6>Narrative</h6>
              <h6>Strategies</h6>
            </div>
          </div>
        </div>
        <BannerRow bgOpacity={0.6} bgImage={image} short>
          <div className="col-8 offset-2">
            <p className="Cutout mb-5">Critical Infrastructures</p>
          </div>
          <div
            className="lead col-6 offset-2"
            style={{ textShadow: '0px 1px #000' }}
          >
            As an interface between human and natural systems, infrastructures
            networks underpin the form and functioning of the built environment.
            As such, a failure in an infrastructure system can have cascading
            effects and impact ecosystems as well as city-wide water, energy,
            food, waste management, and transportation service provision. Sea
            level rise and flooding, in particular, pose significant challenges
            and risks. For example, the consequences of floods related to
            Hurricane Sandy in the New York area were manifold and extensive
            flooding disrupted transportation, heating, telecoms and sewage
            networks, and led to a breakdown of the electric grid that left over
            21 million people without electricity for several days.
          </div>
        </BannerRow>
        <div className="row mt-5">
          <div className="col-6 offset-2">
            As an interface between human and natural systems, infrastructures
            networks underpin the form and functioning of the built environment.
            As such, a failure in an infrastructure system can have cascading
            effects and impact ecosystems as well as city-wide water, energy,
            food, waste management, and transportation service provision. Sea
            level rise and flooding, in particular, pose significant challenges
            and risks. For example, the consequences of floods related to
            Hurricane Sandy in the New York area were manifold and extensive
            flooding disrupted transportation, heating, telecoms and sewage
            networks, and led to a breakdown of the electric grid that left over
            21 million people without electricity for several days.
          </div>
        </div>
        <div className="row my-5">
          <div className="col-8 offset-2">
            <h1>Map</h1>
          </div>
          <div
            className="col-10 offset-1"
            style={{
              borderRadius: '0.5rem',
              border: 'solid 1px #333',
              height: '602px'
            }}
          >
            <MapLayerManagerProvider>
              <MapComponent
                colWidth={12}
                scenarioKey={'criticalInfrastructures'}
              />
            </MapLayerManagerProvider>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-8 offset-2">
            <h1>Narrative</h1>
          </div>
          <div className="col-10 offset-1">
            <Tableau activeNarrative={NarrativeType.FoodSecurity} />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-8 offset-2">
            <h1>Strategies</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Story

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
