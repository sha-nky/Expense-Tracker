import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      Navbar {" "}
      <Link to={'/'}>
        Back-to-home
      </Link>
      {" "}
      <Link to={'/about-us'}>
        About-us
      </Link>
    </div>
  )
}

export default Navbar