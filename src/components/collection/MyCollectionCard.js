import React from "react";
import { Link } from "react-router-dom";
import "./CollectionCard.css";

export const MyCollectionCard = ({movie, handleDeleteMovie}) => {
    return (
        <div className="movie-card">
            <div className="movie-card-img-wrapper">
                <img  className="movie-card-img" src={movie.movie.imageLink} />
            </div>
                <div className="overlay">
                    <div className="cardInfo">
                    <Link to={`/library/${movie.movie.id}`}><h3 id="movieTitle">{movie.movie.title} <i>({movie.movie.yearReleased})</i></h3></Link>
                        <p className="movie-card-director">{movie.movie.director}</p>
                        <button id="ejectBtn"><img src="https://cdn.iconscout.com/icon/free/png-256/eject-43-432789.png" id="ejectImg" type="button" onClick={() => handleDeleteMovie(movie.id)}/></button>
                    </div>
                </div>
        </div>
    )
}