import React from "react";

const Fragment = (props) => {
  return (
    <button className={"fragmentBigLimit " + props.className} tabindex={1}>
      <h1>{props.text}</h1>
      <div className="fragmentRotated rectTop"></div>
      <div className="fragmentRotated rectBottom"></div>
    </button>
  );
};

export default Fragment;
