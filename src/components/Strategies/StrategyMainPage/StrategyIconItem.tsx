import { Link } from 'gatsby'
import React from 'react'

import { StrategyGQLEdge } from '../../../@types/StrategyGQL'

import amphibiousBuildings from '../../../../content/assets/strategies/amphibious-buildings.svg'
import barrierIslands from '../../../../content/assets/strategies/barrier-islands.svg'
import beachNourishment from '../../../../content/assets/strategies/beach-nourishment.svg'
import breakwaters from '../../../../content/assets/strategies/breakwaters.svg'
import coastalWetlands from '../../../../content/assets/strategies/coastal-wetlands.svg'
import developmentPermits from '../../../../content/assets/strategies/development-permits.svg'
import developmentTransfers from '../../../../content/assets/strategies/development-transfers.svg'
import dikes from '../../../../content/assets/strategies/dikes.svg'
import dryFloodproofing from '../../../../content/assets/strategies/dry-floodproofing.svg'
import duneBuildingRestoration from '../../../../content/assets/strategies/dune-building-restoration.svg'
import easementAndCovenants from '../../../../content/assets/strategies/easement-and-covenants.svg'
import emergencyPlanningAndPreparedness from '../../../../content/assets/strategies/emergency-planning-and-preparedness.svg'
import evacuationRoutes from '../../../../content/assets/strategies/evacuation-routes.svg'
import floodwalls from '../../../../content/assets/strategies/floodwalls.svg'
import foreshoreTenure from '../../../../content/assets/strategies/foreshore-tenure.svg'
import groynes from '../../../../content/assets/strategies/groynes.svg'
import landAcquisition from '../../../../content/assets/strategies/land-acquisition.svg'
import landTrust from '../../../../content/assets/strategies/land-trust.svg'
import protectedAreaZoning from '../../../../content/assets/strategies/protected-area-zoning.svg'
import reefSystems from '../../../../content/assets/strategies/reef-systems.svg'
import scourProtection from '../../../../content/assets/strategies/scour-protection.svg'
import seawall from '../../../../content/assets/strategies/seawall.svg'
import secondaryDikes from '../../../../content/assets/strategies/secondary-dikes.svg'
import stormSurgeBarriers from '../../../../content/assets/strategies/storm-surge-barriers.svg'
import subdivisionRegulationAndDevelopmentControl from '../../../../content/assets/strategies/subdivision-regulation-and-development-control.svg'
import warningSystem from '../../../../content/assets/strategies/warning-system.svg'
import wetFloodproofing from '../../../../content/assets/strategies/wet-floodproofing.svg'

const ICON_MAP = {
  'amphibious-buildings': amphibiousBuildings,
  'barrier-islands': barrierIslands,
  'beach-nourishment': beachNourishment,
  'coastal-wetlands': coastalWetlands,
  'development-permits': developmentPermits,
  'development-transfers': developmentTransfers,
  'dry-floodproofing': dryFloodproofing,
  'dune-building-restoration': duneBuildingRestoration,
  'easement-and-covenants': easementAndCovenants,
  'emergency-planning-and-preparedness': emergencyPlanningAndPreparedness,
  'evacuation-routes': evacuationRoutes,
  'foreshore-tenure': foreshoreTenure,
  'land-acquisition': landAcquisition,
  'land-trust': landTrust,
  'protected-area-zoning': protectedAreaZoning,
  'reef-systems': reefSystems,
  'scour-protection': scourProtection,
  'secondary-dikes': secondaryDikes,
  'storm-surge-barriers': stormSurgeBarriers,
  'subdivision-regulation-and-development-control':
    subdivisionRegulationAndDevelopmentControl,
  'warning-system': warningSystem,
  'wet-floodproofing': wetFloodproofing,
  breakwaters: breakwaters,
  dikes: dikes,
  floodwalls: floodwalls,
  groynes: groynes,
  seawall: seawall
}

import './StrategyIconItem.scss'

interface Props {
  strategy: StrategyGQLEdge
}

const StrategyIconItem = ({ strategy }: Props): JSX.Element => {
  const strategyType = strategy.node.frontmatter.strategyTypes

  const slug = strategy?.node?.fields?.slug

  if (!slug) return <></>

  const slugWithoutTrailingSlash = slug.substring(0, slug.length - 1)

  const slugArray = slugWithoutTrailingSlash.split('/')
  const slugName = slugArray[slugArray.length - 1]

  return (
    <div className={`col-6 col-sm-4 StrategyIconItem mb-4`}>
      <Link to={slug}>
        <div className={`${strategyType}Item p-2 h-100 d-flex`}>
          <div className="Title">
            <p>{strategy.node.frontmatter.title}</p>
          </div>
          <div className="text-center">
            <img src={ICON_MAP[slugName]} />
          </div>
          <div className="text-center hidden Action">
            Learn more&nbsp;
            <i className="fas fa-arrow-right mt-2" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default StrategyIconItem
