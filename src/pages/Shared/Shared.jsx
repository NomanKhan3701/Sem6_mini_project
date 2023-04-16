import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { AiFillSketchSquare, AiOutlineFile, AiOutlineShareAlt } from "react-icons/ai";
import { HiDocumentDownload } from 'react-icons/hi';
import './Shared.scss'

const Shared = () => {
    const files = [
        {
            name: 'file1',
            type: 'pdf',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
        },
        {
            name: 'file1',
            type: 'jpg',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
        },
        {
            name: 'file1',
            type: 'png',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
        },
        {
            name: 'file1',
            type: 'pdf',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
        },
        {
            name: 'file1',
            type: 'something',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
        },
    ]

    return (
        <div className='View'>
            <div className="files_wrapper">
                <div className='table_of_content'>
                    <div className="icon">Type</div>
                    <div className="name">Name</div>
                    <div className="size">Size</div>
                    <div className="hash">File Hash</div>
                    <div className="download">Status</div>
                    <div className="download">Download</div>
                </div>
                <div className='files_container'>
                    {
                        files.map((file, index) => {
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
                                    <div className="download verified">
                                        Verified
                                    </div>
                                    <div className="download">
                                        <HiDocumentDownload />
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}
export default Shared;
