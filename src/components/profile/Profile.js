import React from "react"
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

export const Profile = () => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("niceTapes_user")));

    const params = useParams()

    return (
        <>
           <div className="profile">
               
           </div> 
        </>
    )
}