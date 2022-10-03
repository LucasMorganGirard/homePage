import React from "react";

const Fragment = (props) => {
  return (
    <div className="fragmentBigLimit">
      <h1>{props.text}</h1>
      <div className="fragmentRotated rectTop"></div>
      <div className="fragmentRotated rectBottom"></div>
    </div>
  );
};

export default Fragment;
