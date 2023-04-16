import React from 'react'

import './Academic.scss';
import View from '../../../../components/View/View';
import p1 from '/public/assets/images/profilePic.png'

const Academic = () => {
    const files = [
        {
            name: 'file1',
            type: 'pdf',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
            verified: true,
        },
        {
            name: 'file1',
            type: 'jpg',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
            verified: false,
        },
        {
            name: 'file1',
            type: 'png',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
            verified: true,
        },
        {
            name: 'file1',
            type: 'pdf',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
            verified: false,
        },
        {
            name: 'file1',
            type: 'something',
            size: '1.2mb',
            hash: '0x1234567890',
            uploaded_at: '12/12/2020',
            verified: true,
        },
    ]

    const userData = [
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
        },
    ]
    return (
        <div>
            <View files={files} userData={userData} />
        </div>
    )
}

export default Academic