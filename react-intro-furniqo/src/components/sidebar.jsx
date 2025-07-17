// import logo from ''
import React from "react";
import { Link } from "react-router";

function Sidebar() {
  const navMenus = [
    {
      to: "/pub/products",
      icon: "bi-house",
      label: "Home",
    },
    {
      to: "/login",
      icon: "bi-box-arrow-in-right",
      label: "Login",
    },
    {
      to: "/register",
      icon: "bi-pencil-square",
      label: "Register",
    },
    {
      to: "/products",
      icon: "bi-box",
      label: "Product List",
    },
    {
      to: "/categories",
      icon: "bi-tags",
      label: "Category List",
    },
    {
      to: "/add-user",
      icon: "bi-person-plus",
      label: "Add User",
    },
  ];
  return (
    <>
      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="logo text-center ms-3">
          <a href="index.html">
            <img src="/furniqo-high-resolution-logo-transparent.png" />
          </a>
        </div>
        {/* Search */}
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search product..."
          //   onChange={}
        />
        {/* Navigation */}
        {navMenus.map((menu, i) => (
          <Link key={i} to={menu.to} className="nav-link">
            <i className="{`bi ${menu.icon}`}">{menu.label}</i>
          </Link>
        ))}
        <div className="mt-auto text-center mb-3">
          <Link to="/login" className="text-danger">
            <i className="bi bi-box-arrow-right" /> Logout
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
