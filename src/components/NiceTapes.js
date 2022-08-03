import React,  {useState, useEffect} from "react"
import { ApplicationViews } from "./ApplicationViews"
import { SearchBar } from "./friends/SearchBar"
import { NavBar } from "./nav/NavBar"
import "./NiceTapes.css"
import { getAllUsers } from "./modules/UserManager"


export const NiceTapes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("niceTapes_user") !== null);

  const setAuthUser = (user) => {
      sessionStorage.setItem("niceTapes_user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("niceTapes_user") !== null)
  }

  const clearUser = () => {
      sessionStorage.clear();
      setIsAuthenticated(sessionStorage.getItem("niceTapes_user") !== null)
  }

  return (
    <>
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
      <ApplicationViews 
          setAuthUser={setAuthUser}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
      />
    </>
  )
} 