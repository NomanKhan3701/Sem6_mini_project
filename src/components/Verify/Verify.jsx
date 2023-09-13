import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  AiFillSketchSquare,
  AiOutlineFile,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { HiDocumentDownload } from "react-icons/hi";
import { BsFillShareFill } from "react-icons/bs";
import "./Verify.scss";
import { useSearchParams } from "react-router-dom";
import p1 from "/public/assets/images/profilePic.png";

const Verify = ({ files = [], setFiles }) => {
  const user = useSelector((state) => state.auth.user);

  const verify = () => {};

  return (
    <div className="View">
      <div className="files_wrapper">
        <div className="table_of_content">
          <div className="icon">Type</div>
          <div className="name">Name</div>
          <div className="size">Size</div>
          <div className="hash">File Hash</div>
          <div className="uploaded_at">Last Modified</div>
          {user.type !== "client" && <div className="download">Share</div>}

          <div className="download">Download</div>
        </div>
        <div className="files_container">
          {files.length > 0 ? (
            files.map((file, index) => {
              return (
                <div className="file" key={index}>
                  <div className="icon">
                    {file.type === "pdf" ? (
                      <div className="icon_wrapper pdf">PDF</div>
                    ) : file.type === "jpg" ? (
                      <div className="icon_wrapper jpg">JPG</div>
                    ) : file.type === "png" ? (
                      <div className="icon_wrapper png">PNG</div>
                    ) : (
                      <div className="icon_wrapper none">
                        <AiOutlineFile />
                      </div>
                    )}
                  </div>
                  <div className="name">{file.name}</div>
                  <div className="size">{file.size}</div>
                  <div className="hash">{file.hash}</div>
                  <div className="hash">{file.uploaded_at}</div>
                  {user?.type !== "client" && (
                    <div
                      className="download verified underline cursor-pointer"
                      onClick={verify}
                    >
                      Share
                    </div>
                  )}

                  <div className="download">
                    <HiDocumentDownload />
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="p-52 text-20 font-bold text-neutral-400">
              No files to view
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default Verify;
