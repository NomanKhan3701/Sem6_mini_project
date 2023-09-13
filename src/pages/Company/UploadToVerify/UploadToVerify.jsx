import React, { useState, useRef, useEffect } from "react";
import { FileDrop } from "react-file-drop";
import { AiOutlineDown, AiOutlineFile } from "react-icons/ai";
import FolderImg from "/public/assets/images/folderImg.png";
import axios from "axios";
import { toast } from "react-toastify";
import "./UploadToVerify.scss";

const UploadToVerify = () => {
  const [files, setFiles] = useState([]);
  const uploadRef = useRef(null);

  const handleBrowseClick = () => {
    uploadRef.current.click();
  };

  const handleFiles = (e, files) => {
    e.preventDefault();
    setFiles((prevFiles) => [...prevFiles, files[files.length - 1]]);
  };

  const handleChange = (e) => {
    e.preventDefault();
    handleFiles(e, e.target.files);
  };

  const handleSubmit = async () => {
    try {
      //   const formData = new FormData();
      //   formData.append("file", files[0]);
      //   formData.append("type", selectedDocType);
      // const response = await axios.post("http://localhost:5000/upload", {
      //     method: "POST",
      //     body: formData,
      // });
      // console.log(response);
      setFiles([]);
      toast.success("File uploaded successfully");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <div className="File_upload_modal">
        <h1 className="text-20 font-bold mb-20">
          Upload Student Documents To Get It Verified
        </h1>
        {files.length > 0 ? (
          files.map((file, index) => {
            return (
              <div key={index} className="file">
                <AiOutlineFile />
                <h6>{file.name}</h6>
              </div>
            );
          })
        ) : (
          <div className="upload_wrapper container">
            <input type="file" hidden ref={uploadRef} onChange={handleChange} />
            <div className="upload-left-section">
              <div className="drag-area">
                <FileDrop onDrop={(files, event) => handleFiles(event, files)}>
                  <img src={FolderImg} alt="" />
                  <h3>Drag your college documents here to start uploading</h3>
                  <span>OR</span>
                  <div onClick={handleBrowseClick} className="upload-btn">
                    Browse File
                  </div>
                </FileDrop>
              </div>
            </div>
          </div>
        )}
        <div className="btn_primary" onClick={handleSubmit}>
          Upload
        </div>
      </div>
    </div>
  );
};

export default UploadToVerify;
