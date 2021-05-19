import { StrategyType } from './StrategyType'

export type StrategyGQLFrontmatter = {
  strategyTypes: StrategyType
  title: string
  excerpt?: string
}

export type StrategyGQLNode = {
  fields: {
    slug: string
  }
  frontmatter: StrategyGQLFrontmatter
}

export type StrategyGQLEdge = {
  node: StrategyGQLNode
}
