import React from 'react'

import './Header.scss'

interface Props {
  children: React.ReactNode
}

const Header = ({ children }: Props): JSX.Element => {
  return (
    <div className="Header shadow row align-items-center py-3">{children}</div>
  )
}

export default Header
