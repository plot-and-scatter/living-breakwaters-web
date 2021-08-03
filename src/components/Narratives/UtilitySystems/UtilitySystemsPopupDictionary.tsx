import { contentMap as BasementMap } from './Popovers/BasementPop'
import { contentMap as HospitalMap } from './Popovers/HospitalPop'
import { contentMap as OutflowMap } from './Popovers/OutflowPop'
import { contentMap as PowerStationMap } from './Popovers/PowerStationPop'
import { contentMap as SchoolMap } from './Popovers/SchoolPop'
import { contentMap as SewageBackupMap } from './Popovers/SewageBackupPop'
import { contentMap as TreatmentPlantMap } from './Popovers/TreatmentPlantPop'
import { contentMap as UndergroundParkingMap } from './Popovers/UndergroundParkingPop'

export enum UtilitySystemsPopupKey {
  Basement = 'Basement',
  Hospital = 'Hospital',
  Outflow = 'Outflow',
  PowerStation = 'Power Station',
  School = 'School',
  SewageBackup = 'Sewage Backup',
  TreatmentPlant = 'Treatment Plant',
  UndergroundParking = 'Underground Parking'
}

export const UtilitySystemsPopupDictionary = {
  [UtilitySystemsPopupKey.Basement]: BasementMap,
  [UtilitySystemsPopupKey.Hospital]: HospitalMap,
  [UtilitySystemsPopupKey.Outflow]: OutflowMap,
  [UtilitySystemsPopupKey.PowerStation]: PowerStationMap,
  [UtilitySystemsPopupKey.School]: SchoolMap,
  [UtilitySystemsPopupKey.SewageBackup]: SewageBackupMap,
  [UtilitySystemsPopupKey.TreatmentPlant]: TreatmentPlantMap,
  [UtilitySystemsPopupKey.UndergroundParking]: UndergroundParkingMap
}
