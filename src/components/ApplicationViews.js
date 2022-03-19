import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { Friends } from './friends/Friends.js'
import { Profile } from './profile/Profile.js'
import { Collection } from "./collection/Collection"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  }

  const setAuthUser = (user) => {
    sessionStorage.setItem("niceTapes_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("niceTapes_user") !== null)
  }

  return (
    <>
      <Routes>

        <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route exact path="/register" element={<Register />} />
        <Route  path="/" element={
            <PrivateRoute>
              Add component here
            </PrivateRoute>
        } />

        <Route path="/follows" element={<PrivateRoute><Friends /></PrivateRoute>} />
        <Route path="/users/:profileId" element={<Profile/>} />
        <Route path="/collections/:profileId" element={<Collection/>} />

      </Routes>
    </>
  )
}