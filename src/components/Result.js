import React from "react";
import Meaning from "./Meaning";
import "../sytles/Result.css"
export default function Result(props) {
  if (props.definition) {
    return (
      <div className="Result">
        <div className="searched-word">
          <h2>{props.definition.word}</h2>
        </div>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
