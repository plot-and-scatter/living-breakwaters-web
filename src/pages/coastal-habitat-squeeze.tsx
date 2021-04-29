import { graphql } from 'gatsby'
import React from 'react'

import { NarrativeType } from '../@types/NarrativeType'
import FixTypeLater from '../@types/FixTypeLater'
import Layout from '../components/Layout/Layout'
import Story from '../components/Stories/Story'

import './Story.scss'
import image from '../../content/assets/images/phil-reid-t80XviPFEEE-unsplash.jpg'

const CoastalHabitatSqueeze = (props: FixTypeLater): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <Story
        title={'Coastal Habitat Squeeze'}
        imageSrc={image}
        lead={
          <>
            The Fraser River Estuary, the largest estuary along the Pacific
            Coast of North America, provides critical stopover habitat for
            millions of migratory birds along the Pacific Flyway. This estuary
            habitat and its food web also support important fishes, including
            for hundreds of millions of out-migrating juvenile salmon each year
            that come from throughout the vast Fraser River watershed. The
            region also provides key habitat for white sturgeon, one of the
            largest freshwater fish in the world, and Pacific herring, which are
            a foundational part of the coastal food web. Moreover, these fish
            are tied to both Indigenous food sovereignty and ways of life. With
            most of the existing coastline fixed behind hard infrastructures
            (e.g., dikes and seawalls), coastal ecosystems in the region cannot
            migrate with rising sea levels. A lack of sediment and other factors
            further exacerbate this problem. Over the course of the 20th
            century, dredging (for navigation) and the construction of many
            jetties and breakwaters have significantly altered sedimentation
            patterns. Without any adaptation, these expansive habitats will
            likely disappear in certain locations by the end of the century.
          </>
        }
        intro={
          <>
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
          </>
        }
        scenarioKey={'coastalHabitat'}
        activeNarrative={NarrativeType.FoodSecurity}
        path={'coastal-habitat-squeeze'}
      />
    </Layout>
  )
}

export default CoastalHabitatSqueeze

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
