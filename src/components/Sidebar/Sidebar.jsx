// src/components/Sidebar.js
import React from "react";
import "./Sidebar.css";
import { FaUserGraduate, FaNewspaper, FaAd } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-heading">Admission Zone</h1>
      <ul className="sidebar-links">
        <li>
          <NavLink to="achievers">
            <FaUserGraduate /> Achievers
          </NavLink>
        </li>
        <li>
          <Link href="/banner">
            <FaAd /> Banner
          </Link>
        </li>
        <li>
          <Link href="/queries">
            <FaNewspaper /> Queries
          </Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Sidebar;
