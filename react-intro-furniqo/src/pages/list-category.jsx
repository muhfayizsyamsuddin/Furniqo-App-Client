import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

export default function ListCategory() {
  return (
    <div className="d-flex min-vh-100">
      <Sidebar />
      {/* <div className="row"> */}
      <div className="main-content flex-grow-1 p-4">
        <h1 className="text-light mb-2">List Category</h1>
        <div className="container">
          <div className="col-6 table-responsive">
            <table className="table table-dark tabel-hover caption-top align-middle rounded overflow-hidden">
              <caption className="text-light">List of category</caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody id="table-product">
                <tr>
                  <th scope="row">1</th>
                  <td>Office Desk</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Office Chair</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Bookshelf Rack</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
