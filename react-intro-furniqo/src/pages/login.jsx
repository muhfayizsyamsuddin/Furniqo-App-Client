import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { api } from "../helpers/http-client";

export default function Login() {
  const navigate = useNavigate();
  //   console.log("Login: Rerender");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log({ email, password });
    //! kirim request ke server:
    //* post {{BASE_URL}}/apis/auth/login {email, password}
    try {
      const response = await api.post("/apis/auth/login", { email, password });
      const access_token = response.data.data.token;
      console.log("🚀 ~ handleLogin ~ access_token:", access_token);

      localStorage.setItem("access_token", access_token);
      navigate("/pub/products");
    } catch (err) {
      console.log("🚀 ~ handleLogin ~ err:", err);
    }
  };
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: 400 }}>
        <div className="text-center mb-3">
          <img
            src="/furniqo-high-resolution-logo-transparent.png"
            alt="Furniqo Logo"
            style={{ height: 60 }}
          />
          <h4 className="mt-3">Login</h4>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => {
                // console.log("->", event.target.value);
                setEmail(event.target.value);
              }}
              className="form-control"
              //   id="email"
              placeholder="email@example.com"
              required=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => {
                // console.log("->", event.target.value);
                setPassword(event.target.value);
              }}
              className="form-control"
              id="password"
              placeholder="********"
              required=""
            />
          </div>
          <button
            type="submit"
            className="btn btn-warning w-100 mt-3 btn-login"
          >
            <i className="bi bi-box-arrow-in-right" /> Login
          </button>
        </form>
        <p className="text-center mt-3 text-light">
          Don't have an account?
          <Link to="/pub/products">Register now</Link>
        </p>
      </div>
    </div>
  );
}
