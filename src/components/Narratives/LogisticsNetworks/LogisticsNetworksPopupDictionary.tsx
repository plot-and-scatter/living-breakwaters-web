import { contentMap as CargoShippingMap } from './Popovers/CargoShippingPop'
import { contentMap as FreightTransportMap } from './Popovers/FreightTransportPop'
import { contentMap as PortFacilitiesMap } from './Popovers/PortFacilitiesPop'
import { contentMap as RetailMap } from './Popovers/RetailPop'

export enum LogisticsNetworksPopupKey {
  CargoShipping = 'Cargo & Shipping',
  FreightTransport = 'Freight Transport',
  PortFacilities = 'Port Facilities',
  Retail = 'Retail'
}

export const LogisticsNetworksPopupDictionary = {
  [LogisticsNetworksPopupKey.CargoShipping]: CargoShippingMap,
  [LogisticsNetworksPopupKey.FreightTransport]: FreightTransportMap,
  [LogisticsNetworksPopupKey.PortFacilities]: PortFacilitiesMap,
  [LogisticsNetworksPopupKey.Retail]: RetailMap
}
