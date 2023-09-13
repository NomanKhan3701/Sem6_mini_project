import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import FileUploadModal from "./components/Modals/FileUploadModal/FileUploadModal";
import Shared from "./pages/Shared/Shared";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "./components/HeroSection/HeroSection";
import NavbarAuth from "./components/NavbarAuth/NavbarAuth";
import Upload from "./pages/Upload/Upload";
import Auth from "./pages/Auth/Auth";
import * as actions from "./store/actions";

import CompanyRequest from "./pages/College/TPO/CompanyRequest/CompanyRequest";
import CompanyVerify from "./pages/College/TPO/CompanyVerify/CompanyVerify";
import StudentVerify from "./pages/College/TPO/StudentVerify/StudentVerify";
import Internship from "./pages/College/TPO/Upload/Internship/Internship";
import Jobs from "./pages/College/TPO/Upload/Jobs/Jobs";
import Students from "./pages/Company/Students/Students";
import UploadToVerify from "./pages/Company/UploadToVerify/UploadToVerify";
import Academic from "./pages/Student/Documents/Academic/Academic";
import CoCurricular from "./pages/Student/Documents/CoCurricular/CoCurricular";
import InternPlacement from "./pages/Student/Documents/InternPlacement/InternPlacement";
import Personal from "./pages/Student/Documents/Personal/Personal";
import VerifyPersonal from "./pages/College/ManagementDept/VerifyPersonal/VerifyPersonal";
import TranslationRequest from "./pages/College/Tpo/TranslationRequest/TranslationRequest";
import VerifyAcademic from "./pages/College/ExamDept/VerifyAcademic/VerifyAcademic";
import { HiOutlineDocumentText } from "react-icons/hi";
import Documents from "./pages/Company/Documents/Documents";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const [currentRoute, setCurrentRoute] = useState({});
  const routes = {
    lawyer: {
      Verification: {
        Icon: <HiOutlineDocumentText />,
        links: [
          {
            name: "User Personal",
            link: "/verify/verify-personal1",
            Elem: <VerifyPersonal />,
          },
          {
            name: "User Personal",
            link: "/verify/verify-personal2",
            Elem: <VerifyPersonal />,
          },
          {
            name: "upload",
            link: "/verify/upload",
            Elem: <UploadToVerify />,
          },
        ],
      },
    },
    judge: {
      Verification: {
        Icon: <HiOutlineDocumentText />,
        links: [
          {
            name: "User Personal",
            link: "/verify/verify-personal1",
            Elem: <VerifyPersonal />,
          },
          {
            name: "User Personal",
            link: "/verify/verify-personal2",
            Elem: <VerifyPersonal />,
          },
          {
            name: "upload",
            link: "/verify/upload",
            Elem: <UploadToVerify />,
          },
        ],
      },
    },
    client: {
      Verification: {
        Icon: <HiOutlineDocumentText />,
        links: [
          {
            name: "User Personal",
            link: "/verify/verify-personal1",
            Elem: <VerifyPersonal />,
          },
          {
            name: "User Personal",
            link: "/verify/verify-personal2",
            Elem: <VerifyPersonal />,
          },
          {
            name: "upload",
            link: "/verify/upload",
            Elem: <UploadToVerify />,
          },
        ],
      },
    },
    administrator: {
      Documents: {
        Icon: <HiOutlineDocumentText />,
        links: [
          {
            name: "Internship",
            link: "/documents/internship",
            // Elem: <Internship />,
            Elem: <></>,
          },
          // {
          //   name: "Jobs",
          //   link: "/documents/jobs",
          //   Elem: <Jobs />,
          // },
        ],
      },
      Verification: {
        Icon: <HiOutlineDocumentText />,
        links: [
          {
            name: "company request", //company requesting student documents
            link: "/verify/company-request",
            Elem: <CompanyRequest />,
          },
          {
            name: "company request", //company requesting student documents
            link: "/verify/company-translation",
            Elem: <TranslationRequest />,
          },
        ],
      },
    },
    student: {
      Documents: {
        Icon: <HiOutlineDocumentText />,
        links: [
          {
            name: "Academic",
            link: "/documents/academic",
            Elem: <Academic />,
          },
          {
            name: "Personal",
            link: "/documents/personal",
            Elem: <Personal />,
          },
          {
            name: "Co-curricular",
            link: "/documents/co-curricular",
            Elem: <CoCurricular />,
          },
          {
            name: "Intern & Placement",
            link: "/documents/intern-placement",
            Elem: <InternPlacement />,
          },
        ],
      },
    },
  };

  useEffect(() => {
    if (user && user.type) {
      console.log(user);
      const userType = user.type;
      const currRoute = Object.entries(routes).find(([key, value]) => {
        return key?.toLowerCase() === userType?.toLowerCase();
      });
      console.log(currRoute);
      setCurrentRoute(currRoute[1]);
    }
  }, [user]);

  return (
    <>
      {isLoggedIn ? (
        <div className="flex">
          <FileUploadModal />
          <ToastContainer position="top-center" />
          <Sidebar />
          <div className="w-full pd-container overflow-auto relative">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              {Object.entries(currentRoute).map(([key, value]) => {
                return value.links.map((link, index) => {
                  return <Route path={link.link} element={link.Elem} />;
                });
              })}
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <div className="no_login">
                <NavbarAuth />
                <HeroSection />
              </div>
            }
          />
          <Route path="/upload" element={<Upload />} />
          <Route path="/register" element={<Auth />} />
        </Routes>
      )}
    </>
  );
}

export default App;
