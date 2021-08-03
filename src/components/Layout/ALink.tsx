import React from 'react'

import './ALink.scss'

interface Props {
  href: string
  children: React.ReactNode
  external?: boolean
  isPDF?: boolean
}

const ALink = ({ children, external, href, isPDF }: Props): JSX.Element => {
  const externalProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {}

  if (external) {
    externalProps.target = '_blank'
    externalProps.rel = 'noopener noreferrer'
  }

  return (
    <a className="ALink" href={href} {...externalProps}>
      {children}
      {isPDF && <i className="far fa-file-pdf mx-1" />}
      {external && <i className="fas fa-external-link-alt ml-1" />}
    </a>
  )
}

export default ALink
