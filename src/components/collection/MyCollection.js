import React from "react";
import { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom'
import "./Collection.css";
import { MyCollectionCard } from "./MyCollectionCard";
import { deleteMovie, getCollectionByUser } from "../modules/CollectionManager";

export const MyCollection = () => {
    const params = useParams()
    const [userId, setUserId] = useState(parseInt(params.profileId));
    const [user, setUser] = useState({});
    const [movies, setMovies] = useState([]);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("niceTapes_user")));

    useEffect(() => {
        getCollectionByUser(currentUser.id).then((collection) => {
            setMovies(collection);
        })
    }, []);

    const handleDeleteMovie = id => {
        deleteMovie(id)
        .then(() => getCollectionByUser(userId).then(setMovies))
        .then(window.location.reload());
    }

    return (
        <div className="container">
           <div className="title-wrapper">
                <h1><span>My Collection</span></h1>
            </div> 
           <div className="collection">
            <section className="movie-collection">
                {movies.map(movie => <MyCollectionCard key={movie.id} movie={movie} handleDeleteMovie={handleDeleteMovie} />)}
            </section>
            <Link id="add-tape-link" to={`/addtape`}><button className="button">Add Tape</button></Link>
            </div>
        </div>
    )
}