import React from "react";
import { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom'
import "./AddTape.css"
import { SearchBarMovies } from "./SearchBarMovies";
import { getAllMovies } from "../modules/MovieManager";

export const AddTape = () => {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState();
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");

    const API = "http://localhost:8088"

    useEffect(() => {
        getAllMovies().then(movies => {
            setMovies(movies)
        })
    }, []);

    const handleSubmit = () => {
        return fetch(`${API}/movies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                director: director,
                yearReleased: parseInt(year),
                description: description,
                imageLink: imageLink
            })
        }).then(response => response.json()).then(
        alert(`Title added to database!`));
    }

    return (
        <div className="container">
           <div className="title-wrapper">
                <h1><span>Add Tape</span></h1>
            </div> 
            <div className="searchWrapper">
                <SearchBarMovies id="searchBar-font" placeholder="Search for a title to add..." data={movies}/>
            </div>
            <div className="title-wrapper">
                <h1><span>Don't See Your Title?</span></h1>
                <h3>(add one to the database)</h3>
            </div> 
            <form className="add-movie-form" onSubmit={handleSubmit}>
                <div className="form-input">
                    <label className="input-label">Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className="form-input">
                    <label className="input-label">Year Released:</label>
                    <input type="number" value={year} onChange={(e) => setYear(e.target.value)}></input>
                </div>
                <div className="form-input">
                    <label className="input-label">Director:</label>
                    <input type="text" value={director} onChange={(e) => setDirector(e.target.value)}></input>
                </div>
                <div className="form-input">
                    <label className="input-label">Description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <div className="form-input">
                    <label className="input-label">Image Link:</label>
                    <input type="text" value={imageLink} onChange={(e) => setImageLink(e.target.value)}></input>
                </div>
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    )
}