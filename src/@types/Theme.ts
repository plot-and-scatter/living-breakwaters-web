export enum ThemeType {
  LogisticsNetworks = 'logisticsNetworks',
  CulturalLandscapes = 'culturalLandscapes',
  UtilitySystems = 'utilitySystems',
  FoodSecurity = 'foodSecurity'
}

export type Theme = {
  index: number
  id: ThemeType
  title: string
  intro: string
  layerIds: string[]
}
