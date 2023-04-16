import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { AiFillSketchSquare, AiOutlineFile, AiOutlineShareAlt } from "react-icons/ai";
import { HiDocumentDownload } from 'react-icons/hi';
import { BsFillShareFill } from 'react-icons/bs'
import './ViewWithUser.scss'
import { useSearchParams } from 'react-router-dom';
import p1 from '/public/assets/images/profilePic.png'

const View = ({ files = [], setFiles }) => {
    const user = useSelector(state => state.auth.user);

    return (
        <div className='View'>
            <div className="files_wrapper">
                <div className='table_of_content'>
                    <div className="icon">Type</div>
                    <div className="name">Name</div>
                    <div className="size">File Owner</div>
                    <div className="download">Size</div>
                    <div className="download">Last Modified</div>
                    <div className="download">Status</div>
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
                                    <div className="size">{file.user}</div>
                                    <div className="download">{file.size}</div>
                                    <div className="download">{file.uploaded_at}</div>
                                    {
                                        user.type !== 'college' && <>
                                            <div className={'download' + ` ${file.verified ? "verified" : ""}`}>
                                                {file.verified ? "Verified" : "Pending"}
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
