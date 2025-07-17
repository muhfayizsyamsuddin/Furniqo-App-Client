// import logo from ''
import React from "react";
import { Link } from "react-router";

function Sidebar() {
  return (
    <>
      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="logo text-center ms-3">
          <a href="index.html">
            <img src="furniqo-high-resolution-logo-transparent.png" />
          </a>
        </div>
        {/* Search */}
        <input
          type="text"
          className="form-control search-input"
          placeholder="Cari produk..."
        />
        {/* Navigation */}
        <Link to="/pub/products" className="active">
          <i className="bi bi-house" /> Home
        </Link>
        <Link to="/login">
          <i className="bi bi-box-arrow-in-right" /> Login
        </Link>
        <Link to="register.html">
          <i className="bi bi-pencil-square" /> Register
        </Link>
        <Link to="/products">
          <i className="bi bi-pencil-square" /> Product List
        </Link>
        <Link to="/categories">
          <i className="bi bi-pencil-square" /> Category List
        </Link>
        <Link to="/add-user">
          <i className="bi bi-pencil-square" /> Add User
        </Link>
        <div className="mt-auto text-center">
          <Link to="/login" className="text-danger">
            <i className="bi bi-box-arrow-right" /> Logout
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
