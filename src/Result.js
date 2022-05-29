import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.definition) {
    return (
      <div className="Result">
        <section>
          <h1>{props.definition.word}</h1>
        </section>

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
