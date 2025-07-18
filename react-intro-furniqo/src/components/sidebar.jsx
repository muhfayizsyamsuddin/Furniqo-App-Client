// import logo from ''
import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import "../App.css";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("access_token");

  const handleLogout = () => {
    console.log("🚀 ~ handleLogout ~ access_token:", "access_token");
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  const navMenus = token
    ? [
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
          label: "Create Staff",
        },
      ]
    : [
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
      ];
  return (
    <>
      {/* SIDEBAR */}
      <div
        className="sidebar d-flex flex-column p-4 bg-dark text-light shadow-sm"
        style={{ minHeight: "100vh", width: "250px" }}
      >
        <div className="text-center mb-4">
          <Link to="/">
            <img
              src="/furniqo-high-resolution-logo-transparent.png"
              className="img-fluid"
              style={{ maxWidth: "150px", opacity: 0.95 }}
            />
          </Link>
        </div>
        {/* Search */}
        <div className="mt-5">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search product..."
            //   onChange={}
          />
        </div>
        {/* Navigation */}
        <nav className="nav flex-column mt-3">
          {navMenus.map((menu, i) => {
            const isActive = location.pathname === menu.to;
            return (
              <Link
                key={i}
                to={menu.to}
                className={`nav-link d-flex align-items-center mb-2 ${
                  isActive ? "active fw-bold text-warning" : "text-light"
                }`}
              >
                <i className={`bi ${menu.icon} me-2`}></i>
                {menu.label}
              </Link>
            );
          })}
        </nav>
        {token && (
          <div className="mt-auto text-center mb-3">
            <Link
              to="/login"
              onClick={handleLogout}
              className="text-decoration-none text-danger fw-semibold d-inline-flex align-items-center gap-2 logout-link"
            >
              <i className="bi bi-box-arrow-right" /> Logout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
