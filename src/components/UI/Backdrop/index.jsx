import React from "react";
import "./Backdrop.scss";

const backdrop = (props) => {
  return props.show ? (
    <div className="Backdrop" onClick={props.removeBackdrop}></div>
  ) : null;
};

export default backdrop;
