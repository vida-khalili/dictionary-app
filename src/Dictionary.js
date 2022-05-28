import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";

function Dictionary() {
  let [searchWord, setSearchWord] = useState("");
  let [definition, setDefinition] = useState({});
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateSearchWord(event) {
    setSearchWord(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
    setDefinition(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <h3>What word do you want to look up?</h3>
      <form onSubmit={handleSubmit}>
        <div className="search-engine d-flex">
          <input
            type="search"
            placeholder="Enter a word"
            autoComplete="off"
            className="form-control"
            onChange={updateSearchWord}
          />
          <button className="btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
      <Results definition={definition} />
    </div>
  );
}

export default Dictionary;
