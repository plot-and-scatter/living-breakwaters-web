import React from 'react'

import Nav from './Nav'
import Footer from './Footer'

import '../../../content/assets/fonts/fonts.css'
import '../../scss/app.scss'
import '../../scss/bootstrap/bootstrap.scss'

interface Props {
  children: React.ReactNode
  excludeNav: boolean
  title: string
}

const Layout = ({ excludeNav, title, children }: Props): JSX.Element => {
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
