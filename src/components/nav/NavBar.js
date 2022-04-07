import React from "react"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({isAuthenticated}) => {

  const [currentUser, setCurrentUser] = useState(sessionStorage.getItem("niceTapes_user"));
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.clear().then(
    navigate("/"));
  }

  return (
    <nav>

      <div className="navBarSpacerLogo">
        <Link className="nav-item" to="/">
            <h1 id="logoText">nice tapes</h1>
            {/* <img src="/images/nicetapes.png" className="nav-link logo" /> */}
        </Link>
      </div>

      <div className="navBarSpacerCenterItems">
        
              <Link id="nav-link" to="/mycollection">Collection</Link>
           
             
              <Link id="nav-link" to="/follows">Following</Link>
          
           
              {/* <Link id="nav-link" to="/reviews">Reviews</Link>             */}
      
      </div>

      <div className="navBarSpacerIcons">
        {/* <Link id="profile-btn" to={`/users/${currentUser.id}`}>Profile</Link> */}
        <Link onClick={handleLogout} id="logout-btn" to="/login">Logout</Link>
      </div>
      

    </nav>
  )
}