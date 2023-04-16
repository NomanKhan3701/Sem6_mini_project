import React from 'react'
import './CompanyRequest.scss'
import AcceptRequestedDocs from '../../../../components/AcceptRequestDocs/AcceptRequestedDocs'
import p1 from '/public/assets/images/profilePic.png'

const CompanyRequest = () => {
  const userData = [
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
      email: "noman.khan3701@gmail.com",
      companyRequested: "Google"
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
      email: "noman.khan3701@gmail.com",
      companyRequested: "Google"
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
      email: "noman.khan3701@gmail.com",
      companyRequested: "Google"
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
      email: "noman.khan3701@gmail.com",
      companyRequested: "Google"
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
      email: "noman.khan3701@gmail.com",
      companyRequested: "Google"
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
      email: "noman.khan3701@gmail.com",
      companyRequested: "Google"
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
      email: "noman.khan3701@gmail.com",
      companyRequested: "Google"
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
      email: "noman.khan3701@gmail.com",
      companyRequested: "Google"
    },


  ]

  return (
    <div>
      <AcceptRequestedDocs userData={userData} />
    </div>
  )
}

export default CompanyRequest