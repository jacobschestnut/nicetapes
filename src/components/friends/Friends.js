import { useEffect, useState } from "react";
import React from "react";
import { FriendCard } from "./FriendCard";
import { getFollowedFriends, deleteFriend } from "../modules/FriendManager";
import "./Friends.css"
import { FriendDetail } from "./FriendDetail";


export const Friends = () => {

    const [friends, setFriends] = useState([]);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("niceTapes_user"))); //sessionStorage gets the currently logged in user
    
    const handleDeleteFriend = id => {
        deleteFriend(id)
        .then(() => getFollowedFriends(currentUser.id).then(setFriends));
    }

    useEffect(() => {
        getFollowedFriends(currentUser.id).then(friends => {
            setFriends(friends)
        })
    }, []);

    return (
        <div className="container">
            <div className="title-wrapper">
                <h1><span>Friends List</span></h1>
            </div>
            <div>
                <div className="container-cards">
                    <section className="friend-list">
                        {friends.map(friend => <FriendCard key={friend.id} friend={friend} handleDeleteFriend={handleDeleteFriend} />)}
                    </section>
                </div>
            </div>
        </div>
    )
}