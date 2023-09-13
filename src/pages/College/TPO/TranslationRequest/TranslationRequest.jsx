import React from "react";
import "./CompanyRequest.scss";
import AcceptRequestedDocs from "../../../../components/AcceptRequestDocs/AcceptRequestedDocs";
import p1 from "/public/assets/images/profilePic.png";
import AcceptRequestedDocs1 from "../../../../components/AcceptRequestDocs1/AcceptRequestedDocs1";

const TranslationRequest = () => {
  const userData = [
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case1",
      from: "English",
      to: "Urdu",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case2",
      from: "English",
      to: "Marathi",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case3",
      to: "English",
      from: "Hindi",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case4",
      to: "Telugu",
      from: "Hindi",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case5",
      from: "English",
      to: "Marathi",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case6",
      from: "English",
      to: "Urdu",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case7",
      from: "English",
      to: "Marathi",
    },
    {
      img: p1,
      name: "John Doe",
      hash: "0x123456789044237853232485843",
      email: "noman.khan3701@gmail.com",
      companyRequested: "Case8",
      to: "Telugu",
      from: "Hindi",
    },
  ];

  return (
    <div>
      <AcceptRequestedDocs1 userData={userData} />
    </div>
  );
};

export default TranslationRequest;
