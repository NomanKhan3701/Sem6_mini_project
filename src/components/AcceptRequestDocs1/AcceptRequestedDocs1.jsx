import React from "react";
import "./AcceptRequestedDocs.scss";
import { useSelector } from "react-redux";
import { HiDocumentDownload } from "react-icons/hi";

const AcceptRequestedDocs1 = ({ userData = [] }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="Accept_requested_docs">
      <div className="user_table">
        <div className="table_of_content">
          <div className="avatar">Avatar</div>
          <div className="name">User requested</div>
          <div className="hash">Case</div>
          <div className="hash">Email</div>
          <div className="hash">From</div>
          <div className="hash">To</div>
          <div className="send">Download</div>
          <div className="send">Upload</div>
        </div>
        <div className="users_container">
          {userData.map((user, index) => (
            <div className="user" key={index}>
              <div className="avatar">
                <img src={user.img} alt="" />
              </div>
              <div className="name">{user.name}</div>
              <div className="hash">{user.companyRequested}</div>
              <div className="hash">{user.email}</div>
              <div className="hash">{user.from}</div>
              <div className="hash">{user.to}</div>
              <div className="download">
                <HiDocumentDownload />
              </div>
              <div className="send">
                <div className="btn_primary">Upload</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcceptRequestedDocs1;
