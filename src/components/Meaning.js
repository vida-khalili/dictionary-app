import React from "react";
import Example from "./Example";
import Synonym from "./Synonym";
import "../styles/Meaning.css";
import "../styles/Example.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>Definition: {definition.definition}</p>
              <Example example={definition.example} />
              <Synonym synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
