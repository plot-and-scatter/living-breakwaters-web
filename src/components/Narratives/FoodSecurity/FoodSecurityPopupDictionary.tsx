import { contentMap as DikeMap } from './Popovers/DikePop'
import { contentMap as FarmhouseMap } from './Popovers/FarmhousePop'
import { contentMap as IntertidalMap } from './Popovers/IntertidalPop'
import { contentMap as IrrigationMap } from './Popovers/IrrigationPop'
import { contentMap as LogisticsMap } from './Popovers/LogisticsPop'
import { contentMap as PumpStationMap } from './Popovers/PumpStationPop'
import { contentMap as UnirrigatedMap } from './Popovers/UnirrigatedPop'

export enum FoodSecurityPopupKey {
  Dike = 'Dike',
  Farmhouse = 'Farmhouse',
  Intertidal = 'Intertidal',
  Irrigation = 'Irrigation',
  Logistics = 'Logistics',
  PumpStation = 'Pump Station',
  Unirrigated = 'Unirrigated'
}

export const FoodSecurityPopupDictionary = {
  [FoodSecurityPopupKey.Dike]: DikeMap,
  [FoodSecurityPopupKey.Farmhouse]: FarmhouseMap,
  [FoodSecurityPopupKey.Intertidal]: IntertidalMap,
  [FoodSecurityPopupKey.Irrigation]: IrrigationMap,
  [FoodSecurityPopupKey.Logistics]: LogisticsMap,
  [FoodSecurityPopupKey.PumpStation]: PumpStationMap,
  [FoodSecurityPopupKey.Unirrigated]: UnirrigatedMap
}
