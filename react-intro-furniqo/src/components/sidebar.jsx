// import logo from ''
import React from "react";

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
        <a href="index.html" className="active">
          <i className="bi bi-house" /> Home
        </a>
        <a href="login.html">
          <i className="bi bi-box-arrow-in-right" /> Login
        </a>
        <a href="register.html">
          <i className="bi bi-pencil-square" /> Register
        </a>
        <a href="list-product.html">
          <i className="bi bi-pencil-square" /> Product List
        </a>
        <a href="list-category.html">
          <i className="bi bi-pencil-square" /> Category List
        </a>
        <a href="add-user.html">
          <i className="bi bi-pencil-square" /> Add User
        </a>
        <div className="mt-auto text-center">
          <a href="register.html" className="text-danger">
            <i className="bi bi-box-arrow-right" /> Logout
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
