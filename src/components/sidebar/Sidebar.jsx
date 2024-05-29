import "./sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import firebase from "firebase/compat/app";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { auth } from "../../firebase"; // Importa auth de firebase/auth
import myIMG1 from "../../resourses/a2.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(DarkModeContext);
  const { dispatch: authDispatch } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();

    signOut(auth).then(() => {
      // Signed out
      authDispatch({ type: "LOGOUT" });
      localStorage.removeItem("user"); // Elimina el usuario del almacenamiento local
      navigate("/login");
    })
    .catch((error) => {
      console.error(error);
      // Manejo de errores
    });
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
        <div className="overlap-3">
            <img className="untitled-design" alt="Untitled design" src={myIMG1} />
            <span className="logo nombre">Cata-Outlet</span>
          </div>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title"></p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Vista General</span>
          </li>
        </Link>
          
          
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Usuarios</span>
            </li>
          </Link>
          

          <Link to="/pagos" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Pagos</span>
          </li>
          </Link>
          
          
          <li onClick={handleLogout }>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
