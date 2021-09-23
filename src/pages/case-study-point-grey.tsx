import { graphql } from 'gatsby'
import React from 'react'

import BannerRow from '../components/Rows/BannerRow'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import SitePageProps from '../@types/SitePageProps'

import image from '../../content/assets/images/cropped-DSC_0328.jpg'
import Subhead from '../components/Layout/Subhead'

const CaseStudy = ({ data }: SitePageProps): JSX.Element => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout title={siteTitle}>
      <SEO title="Erosion of the Point Grey Cliffs" />
      <div className="StoryHeader">
        <BannerRow bgOpacity={0.3} bgImage={image} short>
          <a id="intro" />
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <p className="Cutout mb-5">Erosion of the Point Grey Cliffs</p>
          </div>
          <div className="w-100" />
          <div
            className="lead col-12 col-md-8 offset-md-1 col-lg-6 offset-lg-2"
            style={{ textShadow: '0px 1px #000' }}
          >
            <p>
              Project by <strong>Rens Harteveld</strong>
            </p>
            <p>
              Project team includes <strong>Kees Lokman</strong>,{' '}
              <strong>Tugce Conger</strong>, <strong>Doug Doyle</strong>,{' '}
              <strong>Daan Rijks</strong>, <strong>Amir Taleghani</strong>, and{' '}
              <strong>David Gill</strong>
            </p>
            <p>
              The Point Grey cliffs and its beaches have been eroding with an
              increased rate (average recession rate of 30.0 cm/year) due to
              changing environmental and climatic conditions and
              human-activities. Erosion of the cliffs poses increased risks to
              social and cultural assets such as the local species, natural
              features, and stories attached to specific locations, as well as
              to physical assets such as infrastructure and buildings.
            </p>
          </div>
        </BannerRow>
        <div className="row mt-5">
          <div className="col-12 col-md-9 col-lg-6 offset-md-1 offset-lg-2">
            <Subhead>The problem</Subhead>
            <p>
              In total, five different reasons for the cliff’s erosion were
              identified (Doyle, 2018, UBC/Pacific Spirit Regional Park Cliff
              Management, 2000):
            </p>
            <ul>
              <li>Wave longshore drift</li>
              <li>Ground water leakage from cliff aquifers</li>
              <li>Freeze and taw processes</li>
              <li>Wind and rain events </li>
              <li>Over land flows</li>
            </ul>
            <p>
              From several reports (Golder Associates Ltd., 2015, Pool, 1975,
              UBC, 2004, UBC/Pacific Spirit Regional Park Cliff Management,
              2000), it can be concluded that the problem of erosion hasn’t been
              resolved yet. The fact that the UBC cliffs are still retreating
              shows that our understanding on how the coastal processes
              contribute to the cliff’s erosion has been limited.
            </p>
            <Subhead>The objectives</Subhead>
            <p>The project had two main objectives:</p>
            <ol>
              <li>
                to understand the coastal system and mechanisms that contribute
                to the erosion of the cliffs; and
              </li>
              <li> to develop a local wave model and analyze the system.</li>
            </ol>
            <Subhead>
              The coastal system of the area and mechanisms contributing to the
              Point Grey Cliffs’ erosion
            </Subhead>
            <p>
              Rens investigated the local and regional tidal characteristics,
              winds and waves, Fraser River discharge, sediment budgets, and
              human interventions (including the marine works and dredging
              activities) to understand the coastal system of the study area and
              the mechanisms contributing to the Point Grey Cliff’s erosion.
            </p>
            <Subhead level={2}>Tides</Subhead>
            <p>
              The mean tidal range per day over ten years show that during the
              winter and summer months the tidal range is generally higher than
              in the fall or spring months. Since the tidal range occasionally
              surpasses the 4.0 meter mark, the tidal environment may be
              considered macro-tidal.
            </p>
            <Subhead level={2}>Winds and waves</Subhead>{' '}
            <p>
              Mainly five fetch limited wave fields affect the cliffs. These are
              winds (and thus waves) from the South-West, North-West, and
              Western part (and two in between) of the Strait of Georgia. The
              significant storm wave heights in the Strait of Georgia are less
              than 2.1 meters and the maximum less than 3.3 meters (Barrie and
              Currie, 2000, Milliman, 1980).
            </p>{' '}
            <Subhead level={2}>Fraser River discharge</Subhead>{' '}
            <p>
              Fraser River is the largest river flowing into the Strait of
              Georgia. Fraser River annually discharges around of 17.3·10
              <sup>9</sup> kg/year sediments; the Main arm of the river takes
              85% of the total discharge and 91-97% of the sediment load, where
              the North Arm receives the remaining 15% of the total discharge
              and 3-9% of the sediment load (Milliman, 1980, Thomson, 1981,
              Isfeld et al., 1996, Golder Associates Ltd., 2015). The Fraser
              River sediment load is distributed in the following way: 35% sand,
              50% silt and 15% clay.
            </p>
            <Subhead level={2}>Sediment budgets</Subhead>{' '}
            <p>
              Most of the sediment input for the Point Grey cliffs and beaches
              come through the North Arm of the Fraser River (Golder Associates
              Ltd., 2015, Pool, 1975). Much of this sediment immediately travels
              westward into the Strait of Georgia and will never reach the Point
              Grey cliffs and beaches (Golder Associates Ltd., 2015).
            </p>
            <Subhead level={2}>Human interventions</Subhead>{' '}
            <p>
              Many human interventions have taken place in the Lower Mainland
              region over time that have altered the local and regional coastal
              system. These interventions can be grouped under marine works and
              dredging activities in Fraser River. The marine works include berm
              and groyne systems, jetties and breakwaters, and trifurcation
              works. Dredging has been conducted over the past decades to
              maintain the safe navigation of the Fraser River but the dredging
              in the North Arm has completely stopped (Hart, 2018).
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CaseStudy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
