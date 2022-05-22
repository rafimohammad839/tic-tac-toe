import React from "react";

const Square = (props) => {
  return (
    <>
      <button className="button" value={props.value} onClick={props.onClick}>
        {props.value}
      </button>
    </>
  );
};

export default Square;
