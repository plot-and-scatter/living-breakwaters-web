export enum ScenarioType {
  LogisticsNetworks = 'logisticsNetworks',
  CulturalLandscapes = 'culturalLandscapes',
  UtilitySystems = 'utilitySystems',
  FoodSecurity = 'foodSecurity'
}

export type Scenario = {
  index: number
  id: ScenarioType
  title: string
  intro: string
  layerIds: string[]
}
