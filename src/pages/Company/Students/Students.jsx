import React from 'react'
import './Students.scss';
import RequestDocs from '../../../components/RequestDocs/RequestDocs';
import p1 from '/public/assets/images/profilePic.png'

const Students = () => {
    const userData = [
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
            email: "noman.khan3701@gmail.com"
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
            email: "noman.khan3701@gmail.com"
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
            email: "noman.khan3701@gmail.com"
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
            email: "noman.khan3701@gmail.com"
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
            email: "noman.khan3701@gmail.com"
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
            email: "noman.khan3701@gmail.com"
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
            email: "noman.khan3701@gmail.com"
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
            email: "noman.khan3701@gmail.com"
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
            email: "noman.khan3701@gmail.com"
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
            email: "noman.khan3701@gmail.com"
        },
        {
            img: p1,
            name: 'John Doe',
            hash: '0x123456789044237853232485843',
            email: "noman.khan3701@gmail.com"
        },

    ]

    return (
        <div>
            <RequestDocs userData={userData} />
        </div>
    )
}

export default Students