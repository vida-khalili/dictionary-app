import React from "react";

function Example (props){
    if (props.example){
        return (
           <div className="Example">Example: {props.example}</div>
        )
    }
    else {
        return null;
    }

}


export default Example;