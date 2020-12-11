export enum ScenarioType {
  CriticalInfrastructures = 'criticalInfrastructures',
  CoastalHabitat = 'coastalHabitat',
  EmergencyPreparedness = 'emergencyPreparedness',
  FoodSecurity = 'foodSecurity'
}

export type Scenario = {
  index: number
  id: ScenarioType
  title: string
  intro: string
  layerIds: string[]
}
