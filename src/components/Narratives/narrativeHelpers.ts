export const narrativeGenerator = <T>(
  narrativeStage: number,
  narrativeStageValues: T[]
): T => {
  return narrativeStageValues[narrativeStage]
}
