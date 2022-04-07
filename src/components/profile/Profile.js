import React from "react"
import {Link} from "react-router-dom"
import "./Profile.css"
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { getUserById } from "../modules/UserManager";

export const Profile = () => {
    const params = useParams()
    const [userId, setUserId] = useState(parseInt(params.profileId));
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("niceTapes_user")));
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserById(userId).then((user) => {
            setUser(user);
        })
    }, []);

    return (
        <>
           <div className="container">
            <div className="profile">
            <section className="profile-info">
    
                
                <div className="profile-img-wrapper">
                    <img className="profile-img" src={user.imageLink} />
                </div>
                
                <div className="profile-text">
                    <div className="profile-title-wrapper">
                        <h1>{user.username}'s Profile</h1>
                    </div>
                    <div className="profile-quote-wrapper">
                        <p>"{user.quote}"</p>
                    </div>
                </div>
            </section>
            <Link to={`/collections/${user.id}`}><button className="button" id="collectionBtn">{user.username}'s collection</button></Link>
           </div>
           </div> 
        </>
    )
}