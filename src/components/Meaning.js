import React from "react";
import "../sytles/Meaning.css"
export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              <p className="example"> {definition.example}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
