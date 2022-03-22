import React from "react";
import { Link } from "react-router-dom";
import "./CollectionCard.css";

export const MyCollectionCard = ({movie, handleDeleteMovie}) => {
    return (
        <div className="movie-card">
            <div className="movie-card-img-wrapper">
                <img  className="movie-card-img" src={movie.movie.imageLink} />
                <div className="overlay">
                    <div className="cardInfo">
                        <h3>{movie.movie.title} <i>({movie.movie.yearReleased})</i></h3>
                        <p className="movie-card-director">{movie.movie.director}</p>
                        <button id="ejectBtn"><img src="https://cdn.iconscout.com/icon/free/png-256/eject-43-432789.png" id="ejectImg" type="button" onClick={() => handleDeleteMovie(movie.id)}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}