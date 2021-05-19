import FixTypeLater from './FixTypeLater'

interface SitePageProps<DataType> {
  data: DataType
  location: FixTypeLater
  pageContext: FixTypeLater
}

export default SitePageProps
