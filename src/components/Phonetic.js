import React from "react";
import "../styles/Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a className="btn btn-primary"
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>
        <h2 className="phonetic-text">{props.phonetic.text}</h2>
      </div>
    );
  } else {
    return null;
  }
}
