import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavbarAuth.scss'

const NavbarAuth = () => {
    const location = useLocation();
    return (
        <div className='Navbar_auth Container'>
            <Link to='/' >
                <div className="logo">Peer<span>Docs</span></div>
            </Link>
            <div className="links_wrapper">
                <Link to='/'>
                    <div className={"link" + ` ${location.pathname === '/' ? "active" : ""}`}>
                        Home
                    </div>
                </Link>
                <Link to='/upload'>
                    <div className={"link" + ` ${location.pathname === '/upload' ? "active" : ""}`}>
                        Upload
                    </div>
                </Link>
                <Link to='/register'>
                    <div className={"link" + ` ${location.pathname === '/UserReg' ? "active" : ""}`}>
                        Register
                    </div>
                </Link>
            </div>

        </div>
    )
}
export default NavbarAuth