import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <nav>

      <Link className="nav-item" to="/">
          <img src="/images/nicetapes.png" className="nav-link logo" />
      </Link>

      <div className="space"></div>

      <ul>
          <li className="space"></li>
          <li className="nav-item">
            <Link className="nav-link" to="/collection">My Collection</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/follows">Following</Link>
          </li>
          <li>
            <Link className="nav-item" to="/reviews">My Reviews</Link>
          </li>
      </ul>

    </nav>
  )
}