import React from "react";
import CharCard from "./components/CharCard.js"


export default function CharList(props) {

  return (
    <div>
          {props.charInfo.map(item => {
            return (
              <CharCard charInfo={item} /> 
            );
            })}
    </div>
  )
}
