import React from 'react'
import './AcceptRequestedDocs.scss';
import { useSelector } from 'react-redux';

const AcceptRequestedDocs = ({ userData = [] }) => {
    const user = useSelector(state => state.auth.user);

    return (
        <div className='Accept_requested_docs'>
            <div className="user_table" >
                <div className="table_of_content">
                    <div className="avatar">Avatar</div>
                    <div className="name">Name</div>
                    <div className="hash">Company Requested</div>
                    <div className="hash">Email</div>
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
                                <div className="hash">{user.companyRequested}</div>
                                <div className="hash">{user.email}</div>
                                <div className="hash">{user.hash}</div>

                                <div className="send">
                                    <div className="btn_primary">Give All Documents</div>
                                </div>
                            </div>))
                    }
                </div>
            </div>
        </div >
    )
}

export default AcceptRequestedDocs