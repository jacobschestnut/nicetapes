import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { getFriendById } from "../modules/FriendManager";
import { deleteFriend } from "../modules/FriendManager";
import "./FriendDetail.css"

export const FriendDetail = () => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("niceTapes_user")));
    const [friend, setFriend] = useState({user: {}});
    const [isLoading, setIsLoading] = useState(true);

    const {friendId} = useParams ();
    const navigate = useNavigate();

    useEffect (() => {
        console.log("useEffect", friendId)
        getFriendById(friendId)
            .then(friend => {
                setFriend(friend);
                setIsLoading(false);
            })
    }, [friendId]);

    const handleDeleteFriend = () => {
        setIsLoading(true);
        deleteFriend(friendId)
        .then(() => navigate("/friends"));
    }

    return (
        <div className="friend">
            <div className="image__wrapper">
                <img className="friend__img" src={friend.user.imageLink}></img>
            </div>
                <h3 className="friend__name">{friend.user.name}</h3>
                <div className="friend__email">{friend.user.email}</div>
                <button type="button" className="bn1" disabled={isLoading} onClick={handleDeleteFriend}>Remove Friend</button>
        </div>
    )
}