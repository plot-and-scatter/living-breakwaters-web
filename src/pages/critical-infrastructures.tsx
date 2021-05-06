import { graphql } from 'gatsby'
import React from 'react'

import { NarrativeType } from '../@types/NarrativeType'
import FixTypeLater from '../@types/FixTypeLater'
import Layout from '../components/Layout/Layout'
import Story from '../components/Stories/Story'

import './Story.scss'
import image from '../../content/assets/images/zan-baldwin-5Q_-dz0hsNo-unsplash.jpg'

const CriticalInfrastructures = (props: FixTypeLater): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <Story
        title={'Logistics Networks'}
        imageSrc={image}
        lead={
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
        scenarioKey={'criticalInfrastructures'}
        activeNarrative={NarrativeType.FoodSecurity}
        path={'critical-infrastructures'}
      />
    </Layout>
  )
}

export default CriticalInfrastructures

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
