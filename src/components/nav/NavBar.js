import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <nav>

      <div className="navBarSpacerLogo">
        <Link className="nav-item" to="/">
            <h1 id="logoText">nice tapes</h1>
            {/* <img src="/images/nicetapes.png" className="nav-link logo" /> */}
        </Link>
      </div>

      <div className="navBarSpacerCenterItems">
        
              <Link id="nav-link" to="/collection">Collection</Link>
           
             
              <Link id="nav-link" to="/follows">Following</Link>
          
           
              <Link id="nav-link" to="/reviews">Reviews</Link>            
      
      </div>

      <div className="navBarSpacerIcons"></div>
      

    </nav>
  )
}