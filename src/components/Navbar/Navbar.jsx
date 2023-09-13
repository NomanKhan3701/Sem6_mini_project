import React, { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import profilePic from "/public/assets/images/profilePic.png";
import { FiPlus } from "react-icons/fi";
import "./Navbar.scss";
import FileUploadModal from "../Modals/FileUploadModal/FileUploadModal";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const uploadBtnVisibleLinks = [
    "/verify/verify-personal1",
    "/verify/verify-personal2",
    "/documents/jobs",
    "/documents/academic",
    "/documents/personal",
    "/documents/co-curricular",
    "/documents/intern-placement",
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleNavScroll);
    return () => window.removeEventListener("scroll", handleNavScroll);
  }, [lastScrollY]);

  const handleNavScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollY && currentScrollPos > 80) {
        // if scroll down hide the navbar
        setScrolledDown(true);
      } else {
        // if scroll up show the navbar
        setScrolledDown(false);
      }
      setLastScrollY(currentScrollPos);
    }
  };

  return (
    <div className={`Navbar ${scrolledDown ? "scrolled" : ""}`}>
      <div className="nav_left">
        {uploadBtnVisibleLinks.includes(location.pathname) && (
          <>
            <Link to={"/verify/upload"} className="btn_primary">
              <FiPlus />
              Upload
            </Link>
            {user?.type !== "client" && (
              <div className="link_text">
                {" "}
                <FiPlus /> Add collaborators
              </div>
            )}
          </>
        )}
      </div>
      <div className="nav_right">
        <div className="search">
          <input type="text" placeholder="Search Here..." />
        </div>
        <div className="profile">
          <img src={profilePic} alt="profilePic" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
