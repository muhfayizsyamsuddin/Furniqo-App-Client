import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import { api } from "../helpers/http-client";
import ProductForm from "../components/product-form";
// import { useParams } from "react-router";
// import { useState } from "react";

export default function ListProduct() {
  // const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  async function fetchData() {
    try {
      const response = await api.get("/apis/products/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setProducts(response.data.data);
    } catch (err) {
      console.log("🚀 ~ fetchData ~ err:", err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="d-flex">
      <div className="row">
        <div className="col-12 table-responsive">
          <div className="main-content flex-grow-1 p-4">
            <h1 className="mb-2">List of Products</h1>
            <div className="d-flex justify-content-end mb-2">
              <button
                className="btn btn-warning d-flex align-items-center gap-2 shadow-sm"
                data-bs-toggle="modal"
                data-bs-target="#addModal"
              >
                <i className="bi bi-plus-circle" />
                Add Product
              </button>
            </div>
            <table className="table table-hover align-middle bg-dark text-light shadow-sm rounded overflow-hidden">
              <thead className="custom-thead">
                <tr>
                  <th scope="col" width="180px">
                    Image
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stok</th>
                  <th scope="col">Category</th>
                  <th scope="col">Author</th>
                  <th scope="col" width="50px" />
                </tr>
              </thead>
              <tbody id="table-product">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={product.imgUrl}
                        className="img-fluid"
                        style={{ width: 150, height: "auto" }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>
                      <div
                        className="text-truncate"
                        style={{
                          maxWidth: "200px",
                          //   maxHeight: "100px",
                          //   overflow: "auto",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {product.description}
                      </div>
                    </td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.category.name}</td>
                    <td>{product.author.username}</td>
                    <td>
                      <span className="d-flex">
                        {/* Edit */}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary ms-1"
                          data-bs-toggle="modal"
                          data-bs-target="#editModal"
                          title="Edit"
                          onClick={() => setEditProduct(product)}
                        >
                          <span className="material-symbols-outlined">
                            edit
                          </span>
                        </button>
                        {/* Upload Image */}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary ms-1"
                          data-bs-toggle="modal"
                          data-bs-target="#uploadModal"
                          title="Upload Image"
                        >
                          <span className="material-symbols-outlined">
                            image
                          </span>
                        </button>
                        {/* Delete */}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger ms-1"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ProductForm type="add" onSuccess={fetchData} />
      <ProductForm
        type="edit"
        editProduct={editProduct}
        onSuccess={() => {
          fetchData();
          setEditProduct(null);
        }}
      />
      {/* <div
        className="modal fade"
        id="editModal"
        tabIndex={-1}
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form id="form-edit-product">
              <div className="modal-header">
                <h5 className="modal-title">Edit Product</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="edit-product-name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edit-product-name"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edit-product-category" className="form-label">
                    Category
                  </label>
                  <select
                    className="form-select"
                    id="edit-product-category"
                    required=""
                  >
                    <option value="" disabled>
                      -- Select Category --
                    </option>
                    <option>Office</option>
                    <option>Workspace</option>
                    <option>Storage</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="edit-product-desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edit-product-desc"
                    required=""
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="edit-product-stock" className="form-label">
                      Stock
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="edit-product-stock"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="edit-product-price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="edit-product-price"
                      required=""
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="edit-product-image" className="form-label">
                    Image URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edit-product-image"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button className="btn btn-primary" type="submit">
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      {/* Modal: Upload Image */}
      <div
        className="modal fade"
        id="uploadModal"
        tabIndex={-1}
        aria-labelledby="uploadModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h5 className="modal-title" id="uploadModalLabel">
                  Upload Product Image
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="upload-product-name" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="upload-product-name"
                    placeholder="Enter product name"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="upload-product-image" className="form-label">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="upload-product-image"
                    required=""
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button className="btn btn-primary" type="submit">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Modal: Delete Confirmation */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex={-1}
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger">Confirm Delete</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="modal-body">
              Are you sure you want to delete this product?
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
