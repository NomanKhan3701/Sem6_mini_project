import React, { useEffect, useState } from "react";
import "./Modal.scss";
import Backdrop from "../Backdrop/index";

const Modal = ({
    uploadPreview = null,
    show = null,
    children = null,
    style = null,
    hideBackdrop = null,
    className = null,
    name = null,
}) => {


    return (

        <React.Fragment>
            <Backdrop show={show} removeBackdrop={hideBackdrop} />
            <div
                className={`Modal ${show ? "active" : ""}`}
                style={{ ...style }}
                name={name}
            >
                {children}
            </div>
        </React.Fragment >

    );
};

export default React.memo(Modal);