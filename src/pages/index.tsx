import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import BannerRow from '../components/Rows/BannerRow'
import ContentRow from '../components/Rows/ContentRow'

import image from '../../content/assets/images/annie-spratt-E5PDOC7mTvc-unsplash.jpg'
import Subhead from '../components/Layout/Subhead'
import ALink from '../components/Layout/ALink'

class Index extends React.Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />

        {/* <BannerRow bgOpacity={0.2} bgImage={image}>
          <div className="col-12 text-center">
            <span className="Cutout">Living Breakwaters</span>
          </div>
        </BannerRow> */}

        <BannerRow bgOpacity={0.3} bgImage={image} short>
          <a id="intro" />
          <div className="col-6 offset-3 text-center">
            <p className="Cutout mb-5">Living Breakwaters</p>
          </div>
          <div
            className="lead col-6 offset-3"
            style={{ textShadow: '0px 1px #000' }}
          >
            <p>
              Rising sea levels and increased frequency and severity of extreme
              weather events due to climate change, damage coastal buildings,
              infrastructures, and beaches, impacting municipalities, First
              Nations, and Provincial and Federal governments. In order to
              implement mitigation and adaptation strategies, Natural Resources
              Canada has provided generous support to the Living Breakwaters
              project to develop a layered approach to coastal adaptation that
              incorporates living systems and enhances local and regional
              ecosystems and spatial quality while reducing flood/erosion risks
              and vulnerabilities caused by sea level rise.
            </p>
            <p>
              Canada’s coastline is the largest in the world measuring 243,042
              km. In western Canada, in coastal cities such as Vancouver,
              municipal and city governments have already begun to utilize
              adaptation strategies to protect and enhance coastal ecosystems,
              and existing coastal infrastructure. These strategies include a
              suite of hard and soft conventional and unconventional approaches
              that are meant to reduce risk related to sea level rise (SLR) by
              integrating coastal ecosystem adaptive capacity with nature-based
              ecosystem, and governance solutions
            </p>
            <p>
              This project is meant to be a resource for planners, designers,
              and coastal managers in the Fraser River Delta as well as
              audiences globally. It provides different resources in the form of
              interactive maps, narrative sections, and visualizations of a wide
              range of flood adaptation approaches that incorporates strategies
              for coastal environmental design based on the idea of designing
              with nature. It is our hope that these resources help audiences
              better understand the spatial challenges and potential strategies
              to tackle coastal flood adaptation.
            </p>
          </div>
        </BannerRow>

        <ContentRow rowClasses="p-5">
          <Subhead>Why Coastal Adaptation?</Subhead>
          <p>
            Sea level rise (SLR) is one of the most existential challenges
            facing contemporary societies. According to the United Nations, over
            40% of the world’s population live within 100 km of coastlines, and
            three-quarters of all major cities are located in deltas and coastal
            areas. Researches have projected that increased global temperature
            can result in rising sea levels ranging from 60cm to 2m by the end
            of the century. In addition to SLR and other effects of climate
            change, coastal areas are also confronted with the challenge of
            ongoing population growth, aging infrastructure, and declines in
            coastal social and ecological systems occasioned by interruptions in
            coastal geomorphological processes. Imagining alternative futures
            for coastal cities will require coastal planning strategies that are
            focused on the opportunities for adaptation to changes affecting
            coastal systems using environmentally sensitive design and
            engineered solutions that promote more resilient coastal urban
            landscapes. Approached in this way, coastal adaptation can become a
            mechanism to develop novel planning and design approaches to revive
            ecosystems, to produce sustainable food and energy systems that
            recycle waste and nutrients, and promote beneficial exchanges
            between social and biophysical processes.
          </p>
          <Subhead>Flood Risks in the Fraser River Delta</Subhead>
          <p>
            Like many deltas in the world, the Fraser River Delta (FRD) faces a
            range of environmental and engineering challenges concerning flood
            management. Situated along the Pacific Flyway, the FRD is home to a
            rapidly growing population of nearly 3 million people and the
            largest port on the west coast of North America. Given the realities
            of climate change, SLR, and the increasing incidence of flooding,
            flood management will become increasingly important in the future.
            Responding to SLR will require the development of a suite of
            adaptation strategies that promote safe, healthy, and regenerative
            futures for all forms of life in the region. The following section
            provides a high-level overview of several key coastal impacts and
            adaptation challenges in the region.
          </p>
          <Subhead level={2}>Outdated Flood Control Infrastructure</Subhead>
          <p>
            In 2011, a report by B.C.’s Ministry of Forests, Lands and Natural
            Resource Operations entitled{' '}
            <ALink
              href="http://www.env.gov.bc.ca/wsd/public_safety/flood/pdfs_word/cost_of_adaptation-final_report_oct2012.pdf"
              external
              isPDF
            >
              Cost of Adaptation – Sea Dikes and Alternative Strategies
            </ALink>
            , made headlines in local and national media (Figure 1). The report
            estimated that it will require nearly $9.5 billion to update and
            reinforce the 250km of dikes in the Lower Mainland to protect the
            region against the implications of climate change and SLR. Most of
            these existing dikes have been built or upgraded to meet design
            guidelines set in 1969, but these standards do not take into
            consideration the effects of climate change, subsidence, seismic
            activity, and SLR. Only 4% of all dikes along the Fraser River are
            high enough to withstand the “flood level design” which were derived
            from the record flood in 1894. Over 70% of dikes would be overtopped
            if a similar event would happen today.
          </p>
          <p>
            At the same time, the geology and geomorphology of the Fraser River
            Delta combined with the region’s proximity to the Cascadia fault
            line, make it technically challenging and relatively expensive to
            implement protection measures. As such, more detailed coastal
            modeling as well as case studies of various adaptation options are
            necessary on both site-specific and regional scales, before
            long-term management strategies can be tested and developed for each
            of the shorelines in the region. This approach would ensure that
            adaptation solutions are both feasible and cost-effective.
          </p>
          <Subhead level={2}>Urban Development Pressures</Subhead>
          <p>
            People have lived in, and engaged with, the Fraser River Delta for
            over 10,000 years. During most of this period, hunting, harvesting,
            and gathering of resources had no far-reaching effects on the form
            and functioning of the delta. However, over the past two centuries,
            population growth and urban development have significantly
            transformed the delta, both spatially and ecologically.
          </p>
          <p>
            Pressures to keep urban development out of the floodplain have been
            an ongoing concern. The{' '}
            <ALink
              href="http://www.metrovancouver.org/about/library/LibraryPublications/Official_Regional_Plan_For_The_Lower_Mainland_Planning_Area_1966.pdf"
              external
              isPDF
            >
              Lower Mainland Official Regional Plan
            </ALink>
            , which was adopted in 1966, explicitly called for “Floodplains to
            be kept free of urban uses except where such areas are committed to
            urban development through early settlement, in which case further
            development for urban uses shall be contingent upon flood proofing.”
            Similar pronouncements can be found in successive regional planning
            documents. Yet, over the past several decades, development within
            the floodplain has proliferated across the region. As a result, over
            250,000 people in the region now live within about a meter of mean
            sea level.
          </p>
          <p>
            With regional population growth of approximately 35,000 residents
            per year, pressure to develop in flood-prone areas will continue to
            be a significant challenge in the future. Adopting land-use
            policies, that take into consideration flood construction levels,
            and envisioning new ways in which urban developments can occur
            within flood management and SLR thresholds will be critical for the
            long-term livelihood of residents in the region.
          </p>
          <Subhead level={2}>Legislation and Decision-making</Subhead>
          <p>
            In British Columbia, the responsibility for flood-risk management
            lies with municipalities and other local government authorities.
            This means that municipalities are expected to plan and implement
            guidelines and mandates that are designed to promote flood-risk
            management. Currently, however, municipalities do not have
            sufficient resources (human and financial) to manage and implement
            flood control measures that meet the{' '}
            <ALink
              external
              href="https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/drought-flooding-dikes-dams/integrated-flood-hazard-management/flood-hazard-land-use-management"
            >
              provincial guidelines
            </ALink>
            . Additionally, the permitting process tends to reinforce
            implementation of conventional hard infrastructure strategies (such
            as dikes, seawalls, and breakwaters), while there is a growing
            interest and demand for the development of alternative adaptation
            approaches, including nature-based solutions.
          </p>
          <p>
            Moreover, there is limited coordination and resource allocations
            between municipalities in terms of understanding and managing
            upstream causes and downstream effects of flooding. Currently, the{' '}
            <ALink external href="https://www.fraserbasin.bc.ca/">
              Fraser Basin Council
            </ALink>
            , FBC a non-profit entity, is the only organization actively
            bringing municipalities across the region together to share data, to
            identify risks and vulnerabilities, and to develop a long-term
            regional flood strategy. Since SLR does not know any boundaries, it
            will be important to further develop governance arrangements through
            which all relevant rightsholders and stakeholders can work together
            to co-create near and long-term coastal adaptation strategies for
            SLR and flood management across a range of scales.
          </p>
        </ContentRow>
      </Layout>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
