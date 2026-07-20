import { useNavigate } from "react-router";
import Footer from "../components/footer";
import { api } from "../helpers/http-client";
import { useState } from "react";
import Swal from "sweetalert2";
import Button from "../components/button";
import { SuccessAlert, ErrorAlert } from "../helpers/alert";

export default function AddUser() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleAddUser = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post(
        "/auth/add-user",
        { email, password, username, phoneNumber, address },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      SuccessAlert("Staff has been successfully added!");
      navigate("/products");
      console.log(response);
    } catch (err) {
      console.log("🚀 ~ handleAddUser ~ err:", err);
      const errors =
        err.response?.data?.message || err.message || "Something went wrong!";
      ErrorAlert(errors, "Failed to add staff!");
    }
  };
  return (
    <div className="d-flex">
      {/* table */}
      <div className="main-content d-flex justify-content-center">
        <div
          className="card p-4 bg-dark text-light shadow rounded-4 border-0"
          style={{ maxWidth: "800px", width: "100%" }}
        >
          <h2 className="mb-4 border-bottom pb-2">
            <i className="bi bi-person-plus me-2" />
            Create Staff
          </h2>
          <form onSubmit={handleAddUser} className="row g-3" id="form-add-user">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                name="email"
                autoComplete="email"
                placeholder="email@example.com"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                name="password"
                autoComplete="new-password"
                placeholder="********"
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                name="username"
                autoComplete="username"
                placeholder="example"
                required=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="address"
                autoComplete="address"
                placeholder="Apartment, studio, or floor"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPhone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="inputPhone"
                name="phoneNumber"
                autoComplete="tel"
                placeholder="+62 -"
                required=""
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="col-12 text-end mt-3">
              <Button
                type="submit"
                className="btn btn-warning px-4 py-2 shadow-sm"
              >
                Create Staff
              </Button>
              {/* <button
                type="submit"
                className="btn btn-warning px-4 py-2 shadow-sm"
              >
                Add User
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
