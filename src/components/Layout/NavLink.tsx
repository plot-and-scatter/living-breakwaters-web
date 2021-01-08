import { Link } from 'gatsby'
import React from 'react'

interface Props {
  path: string
  title: string
}

const NavLink = ({ path, title }: Props): JSX.Element => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={path}>
        {title}
      </Link>
    </li>
  )
}

export default NavLink
