import FixTypeLater from './FixTypeLater'

interface SitePageProps<DataType, PageContextType> {
  data: DataType
  location: FixTypeLater
  pageContext?: PageContextType
}

export default SitePageProps
