import { graphql } from 'gatsby'
import React from 'react'

import { NarrativeType } from '../@types/NarrativeType'
import FixTypeLater from '../@types/FixTypeLater'
import Layout from '../components/Layout/Layout'
import Story from '../components/Stories/Story'

import './Story.scss'
import image from '../../content/assets/images/ben-den-engelsen-8aVLLbr1HxI-unsplash.jpg'

const FoodSecurity = (props: FixTypeLater): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <Story
        title={'Food Security'}
        imageSrc={image}
        lead={
          <>
            Maecenas ornare, dui eget elementum ultrices, lectus augue tempor
            tellus, a auctor velit ex a lectus. Phasellus lectus lectus, congue
            ut dolor a, tincidunt maximus nulla. Integer risus sem, varius sit
            amet sollicitudin a, condimentum vitae justo. Aliquam viverra nisi
            magna, vestibulum pharetra quam pulvinar nec. Maecenas non augue
            pharetra, congue purus vitae, maximus sapien. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Maecenas id turpis id neque
            ullamcorper vehicula laoreet non dolor. Duis aliquam in orci at
            egestas.
          </>
        }
        intro={
          <>
            Maecenas ornare, dui eget elementum ultrices, lectus augue tempor
            tellus, a auctor velit ex a lectus. Phasellus lectus lectus, congue
            ut dolor a, tincidunt maximus nulla. Integer risus sem, varius sit
            amet sollicitudin a, condimentum vitae justo. Aliquam viverra nisi
            magna, vestibulum pharetra quam pulvinar nec. Maecenas non augue
            pharetra, congue purus vitae, maximus sapien. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Maecenas id turpis id neque
            ullamcorper vehicula laoreet non dolor. Duis aliquam in orci at
            egestas.
          </>
        }
        scenarioKey={'foodSecurity'}
        activeNarrative={NarrativeType.FoodSecurity}
        path={'food-security'}
      />
    </Layout>
  )
}

export default FoodSecurity

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
