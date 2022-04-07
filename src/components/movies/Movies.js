import React from "react";
import { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom'
import "./Movies.css";
import { MovieCard } from "./MovieCard";
import { getAllMovies } from "../modules/MovieManager";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    // const [movieMap, setMovieMap] = useState(movies.sort(function(a,b){
    //     if(a.title < b.title) { return -1; }
    //     if(a.title > b.title) { return 1; }
    //     return 0;
    // }))
    
    useEffect(() => {
        getAllMovies().then((movies) => {
            setMovies(movies);
        })
    }, []);

    return (
        <div className="container">
           <div className="greeting typewriter">
                <h2>WELCOME TO NICE TAPES</h2>
            </div>
           <div className="collection">
            <section className="movie-collection">
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </section>
            </div>
        </div>
    )
}