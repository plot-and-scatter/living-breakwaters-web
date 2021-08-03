import { SiteGQL } from './SiteGQL'
import { StrategyType } from './StrategyType'

export type StrategyGQLFrontmatter = {
  date?: string
  description?: string
  excerpt?: string
  strategyTypes: StrategyType
  title: string
}

export type StrategyGQLNode = {
  fields?: {
    slug: string
  }
  frontmatter: StrategyGQLFrontmatter
}

export type StrategyGQLEdge = {
  node: StrategyGQLNode
}

export type StrategyGQLImageNode = {
  absolutePath: string
  relativePath: string
  childImageSharp: {
    fluid: {
      src: string
    }
  }
}

export type StrategyMainPageGQLFiles = {
  allFile: {
    nodes: StrategyGQLImageNode[]
  }
}

export type StrategyMainPageGQLMarkdownRemark = {
  markdownRemark: {
    id: string
    excerpt: string
    html: string
    frontmatter: StrategyGQLFrontmatter
  }
}

export type StrategyMainPageGQLAllMarkdownRemark = {
  allMarkdownRemark: {
    edges: StrategyGQLEdge[]
  }
}

export type StrategyMainPageGQL = SiteGQL &
  StrategyMainPageGQLFiles &
  StrategyMainPageGQLMarkdownRemark &
  StrategyMainPageGQLAllMarkdownRemark
