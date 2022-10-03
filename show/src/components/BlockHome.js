import React from "react";
import Fragment from "./Fragment";

const BlockHome = (props) => {
  return (
    <button className={"blockHome " + props.className} tabindex={1}>
      <Fragment text={props.text} />
    </button>
  );
};

export default BlockHome;
