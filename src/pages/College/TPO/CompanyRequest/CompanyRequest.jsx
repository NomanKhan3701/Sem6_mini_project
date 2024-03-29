import React from "react";
import "./CompanyRequest.scss";
import AcceptRequestedDocs from "../../../../components/AcceptRequestDocs/AcceptRequestedDocs";
import p1 from "/public/assets/images/profilePic.png";

const CompanyRequest = () => {
  const userData = [
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case1",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case2",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case3",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case4",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case5",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case6",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case7",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case8",
    },
  ];

  return (
    <div>
      <AcceptRequestedDocs userData={userData} />
    </div>
  );
};

export default CompanyRequest;
