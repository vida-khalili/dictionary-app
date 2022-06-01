import React from "react";
import Meaning from "./Meaning";
import "../styles/Result.css";
import Phonetic from "./Phonetic";
export default function Result(props) {
  if (props.definition) {
    return (
      <div className="Result">
        <div className="searched-word">
          <h2 className="text-capitalize searched-word-word">
            {props.definition.word}
          </h2>
          {props.definition.phonetics.map(function (phonetic, index) {
            return <Phonetic phonetic={phonetic} key={index} />;
          })}
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
