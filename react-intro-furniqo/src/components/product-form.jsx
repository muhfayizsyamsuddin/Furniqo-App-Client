import { useState } from "react";
import { api } from "../helpers/http-client";
// import { useNavigate } from "react-router";
// import {Modal}
/* global bootstrap */

export default function ProductForm({ onSuccess }) {
  //   const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(
        "/apis/products/products",
        {
          name,
          description,
          price: Number(price),
          stock: Number(stock),
          imgUrl: imageUrl,
          categoryId: Number(categoryId),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      if (onSuccess) {
        onSuccess();
      }
      const modalElement = document.getElementById("addModal");
      const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
      modal.hide();
      //   navigate("/products");
    } catch (err) {
      console.log("🚀 ~ ProductForm ~ err:", err.response.data || err.message);
    }
  };
  return (
    <div
      className="modal fade"
      id="addModal"
      tabIndex={-1}
      aria-labelledby="addModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <form onSubmit={handleSubmit} id="form-add-product">
            <div className="modal-header">
              <h5 className="modal-title" id="addModalLabel">
                Add Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="product-name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="product-name"
                  required=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="product-desc" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="product-desc"
                  required=""
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="product-price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="product-price"
                  required=""
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="product-stock" className="form-label">
                    Stock
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="product-stock"
                    required=""
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="product-image" className="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="product-image"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="product-category" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                id="product-category"
                required=""
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option value="" disabled>
                  -- Select Category --
                </option>
                <option value={1}>Office</option>
                <option value={2}>Workspace</option>
                <option value={3}>Storage</option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                type="button"
              >
                Cancel
              </button>
              <button className="btn btn-success" type="submit">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
