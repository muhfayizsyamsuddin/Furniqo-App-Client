import Footer from "../components/footer";

export default function AddUser() {
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
            Add New User
          </h2>
          <form className="row g-3" id="form-add-user">
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
              />
            </div>
            <div className="col-12 text-end mt-3">
              <button
                type="submit"
                className="btn btn-warning px-4 py-2 shadow-sm"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
