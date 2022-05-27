import React, { useState } from "react";
import "./Dictionary.css";
function Dictionary() {
  let [searchWord, setSearchWord] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`searching for ${searchWord}`);
  }

  function updateSearchWord(event) {
    setSearchWord(event.target.value);
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
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Dictionary;
