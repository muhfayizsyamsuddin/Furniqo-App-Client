import Sidebar from "../components/sidebar";

export default function ListCategory() {
  return (
    <div>
      <Sidebar />
      <div className="row">
        <div className="col-6 table-responsive">
          <div className="main-content flex-grow-1 p-4">
            <h1>List Category</h1>
            <table className="table caption-top align-middle">
              <caption>List of category</caption>
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
