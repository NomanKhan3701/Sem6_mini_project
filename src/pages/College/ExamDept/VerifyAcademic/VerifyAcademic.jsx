import React from 'react'
import './VerifyAcademic.scss';
import View from '../../../../components/View/View';
import p1 from '/public/assets/images/profilePic.png'
import Verify from '../../../../components/Verify/Verify';

const VerifyAcademic = () => {
    const files = [
        {
            name: 'file1',
            type: 'pdf',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
            verified: true,
            user: "noman.khan3701@gmail.com",
            img: p1,
        },
        {
            name: 'file1',
            type: 'jpg',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
            verified: false,
            user: "noman.khan3701@gmail.com",
            img: p1,
        },
        {
            name: 'file1',
            type: 'png',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
            verified: true,
            user: "noman.khan3701@gmail.com",
            img: p1,
        },
        {
            name: 'file1',
            type: 'pdf',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
            verified: false,
            user: "noman.khan3701@gmail.com",
            img: p1,
        },
        {
            name: 'file1',
            type: 'something',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
            verified: true,
            user: "noman.khan3701@gmail.com",
            img: p1,
        },
    ]

    return (
        <div>
            <Verify files={files} />
        </div>
    )
}

export default VerifyAcademic