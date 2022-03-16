import React from "react";
import { Link } from "react-router-dom";
import "./FriendCard.css"

export const FriendCard = ({friend, handleDeleteFriend}) => {
    return (
        <div className="friendCard">
                <Link to={`/users/${friend.userId}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <h3>{friend.user.username}</h3>
                </Link>
                <div className="img-wrapper">
                    <img className="friend__img" src={friend.user.imageLink} alt="profile pic here"></img>
                </div>
                <div className="button-wrapper">
                    <button id="bn1" type="button" onClick={() => handleDeleteFriend(friend.id)}>Unfollow</button>
                </div>
        </div>
    )
}