import { contentMap as ArchaeologyMap } from './Popovers/ArchaeologyPop'
import { contentMap as BeachMap } from './Popovers/BeachPop'
import { contentMap as BikePathMap } from './Popovers/BikePathPop'
import { contentMap as FishingMap } from './Popovers/FishingPop'
import { contentMap as HotelMap } from './Popovers/HotelPop'
import { contentMap as IntertidalMap } from './Popovers/IntertidalPop'
import { contentMap as ParkMap } from './Popovers/ParkPop'
import { contentMap as SubwayMap } from './Popovers/SubwayPop'
import { contentMap as TransitMap } from './Popovers/TransitPop'

export enum CulturalLandscapesPopupKey {
  Archaeology = 'Archaeology',
  Beach = 'Beach',
  BikePath = 'Bike Path',
  Fishing = 'Fishing',
  Hotel = 'Hotel',
  Intertidal = 'Intertidal',
  Park = 'Park',
  Subway = 'Subway',
  Transit = 'Transit'
}

export const CulturalLandscapesPopupDictionary = {
  [CulturalLandscapesPopupKey.Archaeology]: ArchaeologyMap,
  [CulturalLandscapesPopupKey.Beach]: BeachMap,
  [CulturalLandscapesPopupKey.BikePath]: BikePathMap,
  [CulturalLandscapesPopupKey.Fishing]: FishingMap,
  [CulturalLandscapesPopupKey.Hotel]: HotelMap,
  [CulturalLandscapesPopupKey.Intertidal]: IntertidalMap,
  [CulturalLandscapesPopupKey.Park]: ParkMap,
  [CulturalLandscapesPopupKey.Subway]: SubwayMap,
  [CulturalLandscapesPopupKey.Transit]: TransitMap
}
