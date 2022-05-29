import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "../styles/Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState("Hello");
  const [loaded, setLoaded] = useState(false);
  const [definition, setDefinition] = useState(null);


  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Dictionary</h1>
        <div className="search-card">
          <h3>What word do you want to look up?
        </h3>
          <form onSubmit={handleSubmit} className="search-engine">
            <input
              type="search"
              placeholder="Search for a word"
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              className="form-control"
              onChange={handleKeywordChange}
            />
            <button className="btn btn-primary"><i className="fa-solid fa-magnifying-glass" /></button>
          </form>
        </div>
        <Result definition={definition} />
      </div>
  );
      
  } else {
    load();
    return "Loading!"
  }

}
