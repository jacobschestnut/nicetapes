import React, { useEffect, useState } from "react";
import "./SearchBarMovies.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

export const SearchBarMovies = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("niceTapes_user")));
  
  
  const API = "http://localhost:8088"

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleAddTitle = (movieId) => { // takes userId from filtered array as argument
    return fetch(`${API}/collections`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        movieId: movieId,
        userId: currentUser.id,
      })
    }).then(response => response.json()).then(alert("Tape Added to Collection!"));
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div className="dataResultWrapper" key={value.id}>
                <a className="dataItem" target="_blank">
                  <p>{value.title}</p>
                  <div className="space"></div>
                </a>
                  <button id="ejectBtn"><img src="http://simpleicon.com/wp-content/uploads/play1.png" id="ejectImg" type="button" onClick={() => {handleAddTitle(value.id)}}/></button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBarMovies;