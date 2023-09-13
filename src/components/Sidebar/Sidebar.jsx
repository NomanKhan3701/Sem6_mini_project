import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiLogOut, BiPlusCircle } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { BsPatchCheck } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const user = useSelector((state) => state.auth.user);
  const pathname = useLocation().pathname;
  const [currentRoute, setCurrentRoute] = useState([]);
  const navigate = useNavigate();
  const routes = {
    lawyer: {
      Cases: {
        Icon: <HiOutlineDocumentText />,
        links: [
          {
            name: "Case1",
            link: "/verify/verify-personal1",
          },
          {
            name: "Case2",
            link: "/verify/verify-personal2",
          },
        ],
      },
    },
    judge: {
      Cases: {
        Icon: <HiOutlineDocumentText />,
        links: [
          {
            name: "Case1",
            link: "/verify/verify-personal1",
          },
          {
            name: "Case2",
            link: "/verify/verify-personal2",
          },
        ],
      },
    },
    client: {
      Cases: {
        Icon: <HiOutlineDocumentText />,
        links: [
          {
            name: "Case1",
            link: "/verify/verify-personal1",
          },
          {
            name: "Case2",
            link: "/verify/verify-personal2",
          },
        ],
      },
    },
    administrator: {
      Accounts: {
        Icon: <HiOutlineDocumentText />,
        links: [
          {
            name: "Account creation",
            link: "/documents/internship",
          },
        ],
      },
      Verification: {
        Icon: <HiOutlineDocumentText />,
        links: [
          //   {
          //     name: "student", //student uploaded document verification
          //     link: "/verify/student",
          //   },
          {
            name: "Document verification", //company requesting student documents
            link: "/verify/company-request",
          },
          //   {
          //     name: "company verify", //company uploads student docs for verification
          //     link: "/verify/company-verify",
          //   },
        ],
      },
      Translation: {
        Icon: <HiOutlineDocumentText />,
        links: [
          //   {
          //     name: "student", //student uploaded document verification
          //     link: "/verify/student",
          //   },
          {
            name: "Document Translation", //company requesting student documents
            link: "/verify/company-translation",
          },
          //   {
          //     name: "company verify", //company uploads student docs for verification
          //     link: "/verify/company-verify",
          //   },
        ],
      },
    },
  };

  useEffect(() => {
    if (user) {
      const userType = user.type;
      const currRoute = Object.entries(routes).find(([key, value]) => {
        return key === userType;
      });
      setCurrentRoute(currRoute[1]);
    }
  }, [user]);

  useEffect(() => {
    if (pathname === "/") {
      let firstLink = "/";
      Object.entries(currentRoute).forEach(([key, value]) => {
        if (firstLink === "/") firstLink = value.links[0].link;
      });
      navigate(firstLink);
    }
  }, [currentRoute, pathname]);

  return (
    <div
      className={`flex flex-col text-14 m-[.4rem] bg-blue-100 rounded-6 sticky top-4 text-white h-[calc(100vh-.8rem)] transition duration-150 ease-out z-50
        ${!sidebarOpen ? "w-[4.5rem]" : "min-w-[22rem] w-[22rem]"}`}
    >
      <div
        onClick={() => setSidebarOpen((state) => !state)}
        className={`absolute text-18 right-[-1.5rem]  text-neutral-600 bg-neutral-100 shadow-md grid place-items-center  rounded-50 cursor-pointer ${
          !sidebarOpen ? "top-[4.8rem] w-24 h-24" : "top-[4rem] w-30 h-30"
        }`}
      >
        {!sidebarOpen ? <AiOutlineRight /> : <AiOutlineLeft />}
      </div>
      {!sidebarOpen ? (
        <>
          <div className="border-b border-b-neutral-500 p-[1.6rem] w-full text-18 font-semibold">
            P
          </div>
          <div className="flex flex-col gap-22 align-middle max-h-full text-18 pt-26 overflow-auto hide-scrollbar w-full">
            {Object.entries(currentRoute).map(([key, value]) => {
              console.log(key, value);
              return (
                <div key={key} className="mx-auto">
                  {value.Icon}
                </div>
              );
            })}
          </div>
          <div className="cursor-pointer hover:text-blue mt-auto mx-auto py-10">
            <BiLogOut className="text-20" />
          </div>
        </>
      ) : (
        <>
          <div className="border-b border-b-neutral-500 p-[1.6rem] px-[2rem] w-[23rem]">
            <div className="capitalize">{user.type}</div>
            {/* PeerDocs */}
          </div>
          <div className="flex flex-col max-h-full text-14 pt-16 overflow-auto hide-scrollbar p-[2rem] pr-10">
            {Object.entries(currentRoute).map(([key, value]) => {
              return (
                <div key={key}>
                  <div className="text-neutral-200 font-semibold flex align-middle gap-10 capitalize">
                    <div className="text-[1.5rem] mt-2">{value.Icon}</div>
                    {key}
                  </div>
                  <div className="py-10">
                    {value.links.map((item, index) => {
                      return (
                        <Link to={item.link} key={index}>
                          <div
                            key={index}
                            className={`ml-6 capitalize hover:text-white hover:border-l-2 hover:border-l-blue transition-all text-14 cursor-pointer py-6 px-5 border-l  ${
                              pathname === item.link
                                ? "border-l-2 border-l-blue text-blue font-semibold"
                                : "text-neutral-300 border-l-neutral-500 font-medium"
                            }`}
                          >
                            {item.name}
                          </div>
                        </Link>
                      );
                    })}
                    {user?.type === "lawyer" && (
                      <div className="flex gap-3 items-center mt-5 w-max text-green cursor-pointer">
                        <BiPlusCircle />
                        Add cases
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex align-middle gap-8 py-16 px-20 text-16 cursor-pointer hover:text-blue mt-auto">
            <BiLogOut className="text-22" />
            Logout
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
