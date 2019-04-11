import React from "react";

const Character = props => {
  return <li className="characters">{props.character.name}</li>;
};

export default Character;
