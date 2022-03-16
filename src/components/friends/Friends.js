import { useEffect, useState } from "react";
import React from "react";
import { FriendCard } from "./FriendCard";
import { getFollowedFriends, deleteFriend } from "../modules/FriendManager";
import { getAllUsers } from "../modules/UserManager";
import "./Friends.css"
import { SearchBar } from "./SearchBar";


export const Friends = () => {

    const [friends, setFriends] = useState([]);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("niceTapes_user")));
    const [userData, setUserData] = useState([]);

    useEffect(() => {
      getAllUsers().then(users => {
          setUserData(users)
      })
    }, []);
    
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
                <h1><span>Following</span></h1>
            </div>
            <div className="searchWrapper">
                <SearchBar placeholder="Search for friends..." data={userData}/>
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