import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'

import { StrategyGQLEdge } from '../@types/StrategyGQL'
import { StrategyType } from '../@types/StrategyType'
import ALink from '../components/Layout/ALink'
import FixTypeLater from '../@types/FixTypeLater'
import Header from '../components/Layout/Header'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import StrategyCard from '../components/Strategies/StrategyMainPage/StrategyCard'
import StrategyDescription from '../components/Strategies/StrategyMainPage/StrategyDescription'
import StrategyFilter from '../components/Strategies/StrategyMainPage/StrategyFilter'
import Subhead from '../components/Layout/Subhead'
import Title from '../components/Layout/Title'

import './Strategies.scss'

export const colorForStrategy = (strategy: StrategyType): string => {
  switch (strategy) {
    case StrategyType.Protect:
      return 'primary'
    case StrategyType.Accommodate:
      return 'warning'
    case StrategyType.Retreat:
      return 'danger'
    case StrategyType.Avoid:
      return 'info'
    default:
      return 'secondary'
  }
}

const Strategies = (props: FixTypeLater): JSX.Element => {
  const { data } = props

  const strategies: StrategyGQLEdge[] = data.allMarkdownRemark.edges

  const [filters, setFilters] = useState<StrategyType[]>(
    Object.values(StrategyType)
  )

  const filteredStrategies = strategies.filter((strategyNode) =>
    filters.includes(strategyNode.node.frontmatter.strategyTypes)
  )

  const checkboxCallback = useCallback(
    (event) => {
      const newFilters = [...filters]
      const value = event.target.value
      if (event.target.checked) {
        newFilters.push(value)
      } else {
        const indexOfItem = newFilters.indexOf(value)
        newFilters.splice(indexOfItem, 1)
      }
      setFilters(newFilters)
    },
    [filters]
  )

  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout title={siteTitle}>
      <SEO title="Adaptation Strategies" />
      <Header>
        <Title headingGroup="Adaptation Strategies" />
        {/* <StrategyFilter checkboxCallback={checkboxCallback} filters={filters} /> */}
      </Header>
      <div className="row mt-5">
        <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <p>
            Coastal zones are some of the most ecologically sensitive and
            diverse habitats in the world. Currently, these areas are
            experiencing the detrimental effects of sea-level rise (SLR) and the
            consequences of conventional flood protection methods. The Living
            Breakwater Project understands adaptation as both physical
            interventions and policy planning tools that reduce risks associated
            with sea-level rise. Based on the{' '}
            <ALink
              href="https://www2.gov.bc.ca/assets/gov/environment/climate-change/adaptation/resources/slr-primer.pdf"
              external
              isPDF
            >
              British Columbia Sea Level Rise Primer
            </ALink>
            , this research groups adaptation strategies in four (4) different
            categories: protect, accommodate, retreat, and avoid.
          </p>
        </div>
        <StrategyDescription
          strategies={strategies}
          strategyType={StrategyType.Protect}
        >
          <p>
            <strong>Protect</strong> is defined as a reactive strategy in
            response to sea-level rise and storm surges. These strategies are
            usually more conventional structural interventions, e.g., dikes,
            seawalls, breakwaters, and groynes. Such structures have proven to
            be effective as a short-term solution. However, over time they are
            likely to become less effective and will require maintenance and
            reinforcement due to storm damage. Additionally, hard structures,
            e.g., dikes and seawalls create negative effects and feedback on
            ecosystem morphology and dynamics resulting in ecological
            communities due to habitat modification. Alternatively, strategies
            such as constructed coastal wetlands, dune systems, and barrier
            islands are more cost-effective in the long term and can be more
            beneficial because they provide coastal recreation and ecosystem
            services.
          </p>
        </StrategyDescription>
        <StrategyDescription
          strategies={strategies}
          strategyType={StrategyType.Accommodate}
        >
          <p>
            <strong>Accommodate</strong> refers to strategies that focus on
            adapting in place, i.e., using coastal adaptation measures that
            allow for the occupation of coastal areas even in the face of
            impending risks, e.g., during the event of a storm. Strategies to
            accommodate might be more useful in the short term and can be
            implemented successfully based on judicious risk assessment that
            identifies safe adaptation thresholds. Common accommodation
            strategies may involve dry or wet floodproofing, including
            amphibious buildings, secondary dikes, and crop alterations.
            floodproofing requires the identification of a set of common
            criteria for the implementation of flood insurance programs. Using
            these programs flood insurance is guaranteed for communities that
            regulate floodplain development.
          </p>
        </StrategyDescription>
        <StrategyDescription
          strategies={strategies}
          strategyType={StrategyType.Retreat}
        >
          <p>
            <strong>Retreat</strong> refers to strategies that limit development
            in areas that are affected by sea-level rise. These strategies
            relate to policy planning tools that are meant to relocate private
            or public assets from areas with high risk to areas with no risk or
            lesser risk. Retreat strategies may also focus on the abandonment of
            at-risk assets. Areas that are retreated from will most likely
            become intertidal or natural buffer zones to accommodate future
            sea-level rise.
          </p>
        </StrategyDescription>
        <StrategyDescription
          strategies={strategies}
          strategyType={StrategyType.Avoid}
        >
          <p>
            <strong>Avoid</strong> refers to the actions that ensure no new
            development occurs in areas that are identified as potential flood
            zones.23 Such areas can be designated as no-build zones. Development
            control within these zones can be implemented at the lowest local
            level of municipal planning. Avoid strategies can be implemented
            through measures such as land acquisitions using purchase or
            expropriation. Such strategies will allow municipalities to
            designate expropriated lands as flood zones and hence avoid future
            development on these lands.
          </p>
        </StrategyDescription>
        <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-3">
          <Subhead>Adaptation Considerations</Subhead>
          <p>
            Many urban delta regions have high variability in flood exposure,
            coastal ecosystem function, soil conditions, urban settlement and
            development patterns, and multilevel governance arrangements
            regarding coastal management. Therefore, adaptation solutions for
            coastal flooding ought to be developed taking into considerations a
            wide range of social and environmental conditions. These conditions
            when considered collectively present themes that may require
            different approaches to adaptation. For example, a nature-based
            solution (NBS) approach utilizing wetlands can be effective as wave
            attenuation during storm surges in order to protect people and
            coastal assets from erosion and storms. However, in areas where
            wetlands may not be viable, the most appropriate solution might be
            retreating from the shoreline or implementing other forms of hard
            defense, e.g., dikes or a mixture of grey and green coastal
            infrastructure solutions. In other areas, sediment fences may be
            used to reduce erosion and simulate sedimentation that can serve as
            precursor to the rehabilitation of wetlands or mangrove forests.
            Ultimately, decisions regarding the most appropriate adaptation
            solutions are contingent on stringent approaches to risk assessment
            and the appropriate application the risk assessment results towards
            strategies that contribute to reducing risk but also producing
            options for enhancing adaptation.
          </p>
          <Subhead>Spatial Integration</Subhead>
          <p>
            Although conventional flood protection strategies have proven to be
            effective, they do not address the long-term effects of SLR and at
            times they may harm coastal ecosystems and livelihoods rather than
            protect them. In most cases, SLR adaptation strategies involve the
            construction of physical structures and can have an impact on the
            cultural significance of a community. Therefore, it is important to
            consider how a proposed adaptation strategy will potentially affect
            community livelihoods and biodiversity in existing ecological
            systems.
          </p>
          <p>
            Adaptation strategies for SLR should fundamentally include consider
            relationships to existing land uses and ecological functions. These
            concerns should include topography, geomorphology, available space,
            land value, risk, safety, ecological value, ecosystem services, and
            cultural significance, to name just a few. High land use density can
            significantly limit the applicability of adaptation measures in
            coastal areas where it is difficult to allocate space for the
            implementation of adaptation strategies. Furthermore, land value can
            also impact the acquisition of available space as implementing
            large-scale flood protection requires significant space and the cost
            and funding of acquiring land can be expensive.
          </p>
          <p>
            At the same time, it is also important to consider how proposed
            flood adaptation strategies can adapt over time, and work together
            with other strategies. For instance, nature-based solutions (NBS)
            can be utilized as a stand-alone approach or alongside more
            conventional approaches to reduce risk. Ensuring there are multiple
            layers of defence can increase resilience, reduce direct cost
            related to the implementation of coastal adaptation projects, and
            provide multiple co-benefits, e.g., recreational activities and
            pollution abatement or by supporting coastal community livelihoods.
            Flood defences, such as dikes, groynes, and jetties can also be
            aesthetically and visually obstructive or displeasing. As such,
            adaptation strategies that utilize these approaches should include
            significant local stakeholder input to ensure that there is adequate
            spatial integration of adaptation solutions within the broader
            landscape context. This can serve to foster the integration of both
            recreational functions and the provisioning of food and energy
            production alongside flood protection.
          </p>
          <Subhead>A Values-Based Approach</Subhead>
          <p>
            Community perception of risk is also an important consideration for
            formulating and implementing effective coastal adaptation policy and
            practice. This is because risk perception is shaped by individual
            attitudes and basic beliefs related to the value of ecosystems. More
            importantly, risk perception has been linked directly to adaptation
            outcomes because higher levels of ecological values have correlated
            positively with higher perceptions of risks. Perceptions of higher
            levels of risk can contribute a heightened sense of community
            thereby preparing littoral populations to be more responsive to
            adapt to coastal changes. Community buy in is also critical for
            ensuring favourable outcomes among diverse groups, to achieve
            win-win solutions and to prevent conflicts between competing coastal
            interests. Therefore, adaptation approaches should include
            community-based risk assessment that consider incorporating
            community cultural values, equitable social relations and engagement
            that focus on joint learning, and the generation of trust and
            commitment. These serve as underlying forces that contribute to
            effective and equitable collaborative coastal management processes.
          </p>
          <Subhead>Browse Strategies</Subhead>
        </div>
        <div className="col-12 offset-0">
          <div className="my-3 mb-4">
            <StrategyFilter
              checkboxCallback={checkboxCallback}
              filters={filters}
            />
          </div>
          <div className="StrategyCards row">
            {/* Go alphabetical left-to-right */}
            {filteredStrategies.map((strategy, index) => (
              <StrategyCard key={index} strategy={strategy} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Strategies

Strategies.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "strategy" } } }
      sort: { fields: [frontmatter___title], order: ASC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            strategyTypes
            title
            excerpt
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
