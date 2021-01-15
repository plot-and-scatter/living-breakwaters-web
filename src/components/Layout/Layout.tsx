import React from 'react'

import Nav from './Nav'
import Footer from './Footer'

import '../../../content/assets/fonts/fonts.css'
import '../../scss/app.scss'
import '../../scss/bootstrap/bootstrap.scss'
import FixTypeLater from '../Types/FixTypeLater'

interface Props {
  children: React.ReactNode
  excludeNav?: boolean
  location: FixTypeLater
  title: string
}

const Layout = ({ children, excludeNav, title }: Props): JSX.Element => {
  return (
    <div>
      {!excludeNav && <Nav />}
      <div className="container-fluid bg-white">
        <main>{children}</main>
      </div>
      <Footer title={title} />
    </div>
  )
}

export default Layout
