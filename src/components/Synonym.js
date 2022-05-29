import React from "react";
import "../styles/Synonym.css"

function Synonym(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms"> Synonyms:
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}> {synonym},</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Synonym;
