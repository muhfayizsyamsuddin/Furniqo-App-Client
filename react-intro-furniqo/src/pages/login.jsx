export default function Login() {
  return (
    <div className="bg-light d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: 400 }}>
        <div className="text-center mb-3">
          <img
            src="/furniqo-logo-hitam-transparent.png"
            alt="Furniqo Logo"
            style={{ height: 60 }}
          />
          <h4 className="mt-3">Login</h4>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
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
              className="form-control"
              id="password"
              placeholder="********"
              required=""
            />
          </div>
          <button type="submit" className="btn btn-warning w-100">
            <i className="bi bi-box-arrow-in-right" /> Login
          </button>
        </form>
        <p className="text-center mt-3 mb-0">
          Belum punya akun?
          <a href="register.html">Daftar sekarang</a>
        </p>
      </div>
    </div>
  );
}
