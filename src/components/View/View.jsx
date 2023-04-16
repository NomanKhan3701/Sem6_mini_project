import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { AiFillSketchSquare, AiOutlineFile, AiOutlineShareAlt } from "react-icons/ai";
import { HiDocumentDownload } from 'react-icons/hi';
import { BsFillShareFill } from 'react-icons/bs'
import './View.scss'
import { useSearchParams } from 'react-router-dom';
import p1 from '/public/assets/images/profilePic.png'

const View = ({ files = [], userData = [], setFiles, setUserData }) => {
    const [userModalActive, setUserModalActive] = useState(false);
    const dropdown_toggle_el = useRef(null);
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        document.addEventListener("mousedown", clickOutsideRef);
        return () => document.removeEventListener("mousedown", clickOutsideRef);
    }, [])

    const clickOutsideRef = (e) => {
        if (dropdown_toggle_el.current && !dropdown_toggle_el.current.contains(e.target)) {
            setUserModalActive(false);
        }
    };

    return (
        <div className='View'>
            <div className={'User_popup_wrapper' + ` ${userModalActive ? "active" : ""}`} >
                <div className="user_popup" ref={dropdown_toggle_el}>
                    <div className="table_of_content">
                        <div className="avatar">Avatar</div>
                        <div className="name">Name</div>
                        <div className="hash">Hash</div>
                        <div className="send">Send</div>
                    </div>
                    <div className="users_container">
                        {
                            userData.map((user, index) => (
                                <div className="user" key={index}>
                                    <div className="avatar">
                                        <img src={user.img} alt="" />
                                    </div>
                                    <div className="name">{user.name}</div>
                                    <div className="hash">{user.hash}</div>
                                    <div className="send">
                                        <div className="btn_primary">Send</div>
                                    </div>
                                </div>))
                        }
                    </div>
                </div>
            </div>
            <div className="files_wrapper">
                <div className='table_of_content'>
                    <div className="icon">Type</div>
                    <div className="name">Name</div>
                    <div className="size">Size</div>
                    <div className="hash">File Hash</div>
                    <div className="uploaded_at">Last Modified</div>
                    {
                        user.type !== 'college' && <>
                            <div className="download">Status</div>
                            <div className="download">Share</div>
                        </>
                    }
                    <div className="download">Download</div>
                </div>
                <div className='files_container'>
                    {
                        files.length > 0 ? files.map((file, index) => {
                            return (
                                <div className="file" key={index}>
                                    <div className="icon">
                                        {
                                            file.type === 'pdf' ? <div className='icon_wrapper pdf'>
                                                PDF
                                            </div> : file.type === 'jpg' ? <div className='icon_wrapper jpg'>
                                                JPG
                                            </div> : file.type === 'png' ? <div className='icon_wrapper png'>
                                                PNG
                                            </div> : <div className='icon_wrapper none'>
                                                <AiOutlineFile />
                                            </div>
                                        }
                                    </div>
                                    <div className="name">{file.name}</div>
                                    <div className="size">{file.size}</div>
                                    <div className="hash">{file.hash}</div>
                                    <div className="hash">{file.uploaded_at}</div>
                                    {
                                        user.type !== 'college' && <>
                                            <div className={'download' + ` ${file.verified ? "verified" : ""}`}>
                                                {file.verified ? "Verified" : "Pending"}
                                            </div>
                                            <div className="download sm" onClick={() => {
                                                setUserModalActive(true)
                                            }}>
                                                <BsFillShareFill />
                                            </div>
                                        </>
                                    }
                                    <div className="download">
                                        <HiDocumentDownload />
                                    </div>
                                </div>
                            )
                        })
                            : <h1 className='p-52 text-20 font-bold text-neutral-400'>No files to view</h1>

                    }
                </div>
            </div>
        </div>
    )
}
export default View;
