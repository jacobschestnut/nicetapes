import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

export const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <div className="movie-card-img-wrapper">
                <img  className="movie-card-img" src={movie.imageLink} />
                <div className="overlay">
                    <div className="cardInfo">
                        <Link to={`/library/${movie.id}`}><h3 id="movieTitle">{movie.title} <i>({movie.yearReleased})</i></h3></Link>
                        <p className="movie-card-director">{movie.director}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}