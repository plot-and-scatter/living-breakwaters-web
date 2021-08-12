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
        mapText={
          <>
            <p>
              The Lower Mainland is an important agricultural and food-producing
              region, generating more than 60% of British Columbia’s gross farm
              receipts on just 1.6% of its total land base. This area is home to
              68% of dairy operations and 80% of poultry operations in the
              province. The region is also known for its cranberry production,
              accounting for 92% of the cranberries in B.C. and 48% of all
              cranberries in Canada. Moreover, B.C. has become the largest
              producer of highbush blueberries in the world, with most of its
              production concentrated in the Fraser River Delta.{' '}
            </p>

            <p>
              As part of the Agricultural Land Reserve, a land-protection
              program adopted in 1973, agricultural land is protected from
              encroaching urbanization and industry. However, a significant
              percentage of agricultural land in the region is located within
              floodplains. Increased flood risks and salination from rising sea
              levels pose significant concerns to hundreds of farming operations
              in the region. With less than 5% of the province’s land base
              considered arable, developing flood protection measures as well as
              testing alternative farming practices are critical to maintaining
              the agricultural sector in the province.{' '}
            </p>
          </>
        }
        narrativeText={
          <>
            <p>
              Coastal habitats adapt to environmental and climate change, e.g.,
              sea-level rise by migrating inland to retain their relative
              function and structure. Coastal squeeze occurs where coastal
              armoring or other barriers prevent this natural migration creating
              fixed margins between the land and sea.1, 2 Coastal squeeze may
              lead to the loss of intertidal habitats or even entire intertidal
              zones. The rate at which the loss takes place is dependent on
              factors such as the geographical formation of the coast. 1{' '}
            </p>

            <p>
              Coastal armoring changes the natural dynamics of shoreline
              sediment transport. In coastal and riverine areas, sustained
              sediment supplies are important for maintaining shoreline position
              and for offsetting surface subsidence. Surface subsidence is the
              decline in surface elevation due to the loss of sediment deposits.
              3 Trapped behind sea defense systems, wetlands, mangrove, and
              marshes become increasingly vulnerable to accelerated surface
              subsidence, erosion, and decline. 4
            </p>

            <p>
              Subsidence may also occur due to different forms of underground
              failure.3,8 In many areas, large tracks of wetlands have been
              converted to agricultural use. 5 that have been protected behind
              coastal defense structures such as flood banks.6 Supporting such
              agricultural enterprises has meat adopting irrigation practices
              that involve extracting potable water from deep underground
              aquifers. This leads to groundwater fluxes, saltwater intrusion,
              and deep subsidence. 7 This process is manifested on the surface
              of agricultural lands as tilting, sinking, and slumping of the
              soil surface. Deep subsidence has also been attributed to tectonic
              activity and deep basin processes that have destroyed agriculture
              infrastructure. 8,9
            </p>
          </>
        }
        themeKey={'foodSecurity'}
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
