import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieCard.css";
import { getMovieById } from "../modules/MovieManager";
import { MovieCard } from "./MovieCard";

export const MovieDetail = () => {
    const params = useParams()
    const [movieId, setMovieId] = useState(parseInt(params.movieId));
    const [movie, setMovie] = useState({});

    useState(() => {
        getMovieById(movieId).then((movie) => {
            setMovie(movie);
        })
    }, []);

    return (
        <div className="movie-detail">
            <div className="movie-card-img-wrapper">
                <img  className="movie-card-img" src={movie.imageLink} />
            </div>
            <div className="cardInfo">
                <h3 id="movieTitle">{movie.title} <i>({movie.yearReleased})</i></h3>
                <p className="movie-card-director">{movie.director}</p>
            </div>
            <div className="movie-description">
                <p>{movie.description}</p>
            </div>
        </div>
    )
}