import React from 'react'

interface Props {
  children: React.ReactNode
  rowClasses: string
}

const ContentRow = (props: Props): JSX.Element => {
  const { children } = props
  let { rowClasses } = props
  if (rowClasses == null) {
    rowClasses = 'py-5'
  }

  return (
    <div className={`row ${rowClasses}`}>
      <div className="col-12 offset-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        {children}
      </div>
    </div>
  )
}

export default ContentRow
