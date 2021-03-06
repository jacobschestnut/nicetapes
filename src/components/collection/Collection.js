import React from "react";
import { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom'
import "./Collection.css";
import { getUserById } from "../modules/UserManager";
import { CollectionCard } from "./CollectionCard";
import { deleteMovie, getCollectionByUser } from "../modules/CollectionManager";

export const Collection = () => {
    const params = useParams()
    const [userId, setUserId] = useState(parseInt(params.profileId));
    const [user, setUser] = useState({});
    const [movies, setMovies] = useState([]);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("niceTapes_user")));

    useEffect(() => {
        getUserById(userId).then((user) => {
            setUser(user);
        })
    }, []);

    useEffect(() => {
        getCollectionByUser(userId).then((collection) => {
            setMovies(collection);
        })
    }, []);

    const handleDeleteMovie = id => {
        deleteMovie(id)
        .then(() => getCollectionByUser(userId).then(setMovies));
    }

    return (
        <div className="container">
           <div className="title-wrapper">
                <h1><span>{user.username}'s Collection</span></h1>
            </div> 
           <div className="collection">
            <section className="movie-collection">
                {movies.map(movie => <CollectionCard key={movie.id} movie={movie} />)}
            </section>
            </div>
        </div>
    )
}