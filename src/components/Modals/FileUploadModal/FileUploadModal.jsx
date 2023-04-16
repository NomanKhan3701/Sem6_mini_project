import React, { useState, useRef, useEffect } from 'react'
import './FileUploadModal.scss'
import Modal from '../../UI/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../store/actions/index'
import { FileDrop } from "react-file-drop";
import { AiOutlineDown, AiOutlineFile } from 'react-icons/ai'
import FolderImg from "/public/assets/images/folderImg.png";
import axios from 'axios'
import { toast } from 'react-toastify'


const FileUploadModal = () => {
    const uploadDocumentModal = useSelector(state => state.student.uploadDocumentModal)
    const dispatch = useDispatch();
    const [selectedDocType, setSelectedDocType] = React.useState("Internship & Placements")
    const [dropdownActive, setDropdownActive] = React.useState(false)
    const dropdown_toggle_el = useRef(null);
    const dropdown_button_ref = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", clickOutsideRef);
        return () => document.removeEventListener("mousedown", clickOutsideRef);
    }, [])

    const clickOutsideRef = (e) => {
        if (dropdown_toggle_el.current && !dropdown_toggle_el.current.contains(e.target) && !dropdown_button_ref.current.contains(e.target)) {
            setDropdownActive(false);
        }
    };
    const docTypes = [
        {
            name: "Internship & Placements",
            value: "Internship & Placements",
        },
        {
            name: "Academic",
            value: "Academic",
        },
        {
            name: "Personal",
            value: "Personal",
        },
        {
            name: "Co-Curricular",
            value: "Co-Curricular",
        }
    ]

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
            const formData = new FormData();
            formData.append("file", files[0]);
            formData.append("type", selectedDocType);
            const response = await axios.post("http://localhost:5000/upload", {
                method: "POST",
                body: formData,
            });
            console.log(response);
            setFiles([]);
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        }
    };


    return (
        <Modal
            show={uploadDocumentModal.show}
            hideBackdrop={() => {
                dispatch(actions.setUploadDocumentModal({
                    show: false,
                    type: "student",
                }))
                // setFiles([])
            }}
        >
            <h1 className='text-center text-20 font-bold'>Upload Your File</h1>
            <div className="FileUploadModal">
                {
                    files.length > 0 ?
                        files.map((file, index) => {
                            return (
                                <div key={index} className="file">
                                    <AiOutlineFile />
                                    <h6>{file.name}</h6>
                                </div>
                            );
                        })
                        : <div className="upload_wrapper container">
                            <input type='file' hidden ref={uploadRef} onChange={handleChange} />
                            <div className="upload-left-section">
                                <div className="drag-area">
                                    <FileDrop onDrop={(files, event) => handleFiles(event, files)}>
                                        <img src={FolderImg} alt="" />
                                        <h3>
                                            Drag your college documents here to start uploading
                                        </h3>
                                        <span>OR</span>
                                        <div onClick={handleBrowseClick} className="upload-btn">
                                            Browse File
                                        </div>
                                    </FileDrop>
                                </div>
                            </div>
                        </div>
                }

                <div className="label">
                    Select Document Type
                </div>
                <div className="dropdown_container">
                    <div ref={dropdown_button_ref} className={`dropdown_header`} onClick={() => setDropdownActive(active => !active)}>
                        <div>{selectedDocType}</div>
                        <AiOutlineDown />
                    </div>
                    <div ref={dropdown_toggle_el} className={`dropdown_list ${dropdownActive ? "active" : ""}`}>
                        {
                            docTypes.map((docType, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`dropdown_list_item ${selectedDocType === docType.value ? "active" : ""}`}
                                        onClick={() => {
                                            setSelectedDocType(docType.value)
                                            setDropdownActive(false)
                                        }}
                                    >
                                        {docType.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="btn_primary" onClick={handleSubmit}>
                    Upload
                </div>
            </div>


        </Modal >
    )
}

export default FileUploadModal