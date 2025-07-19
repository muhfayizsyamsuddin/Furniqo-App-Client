import { useEffect, useState } from "react";
import { api } from "../helpers/http-client";
import Swal from "sweetalert2";
import { SuccessAlert, ErrorAlert } from "../helpers/alert";
// import { useNavigate } from "react-router";
// import {Modal}
/* global bootstrap */

export default function ProductForm({ editProduct, type, onSuccess }) {
  //   const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  //   const { id } = useParams();

  useEffect(() => {
    fetchCategories();
    if (type === "edit" && editProduct) {
      setName(editProduct.name);
      setDescription(editProduct.description);
      setPrice(editProduct.price);
      setStock(editProduct.stock);
      setImgUrl(editProduct.imgUrl || "");
      setCategoryId(editProduct.categoryId);
      console.log("editPoduct", editProduct);
    } else {
      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setImgUrl("");
      setCategoryId("");
    }
  }, [type, editProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataProduct = {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        imgUrl,
        categoryId: Number(categoryId),
      };
      if (type === "edit") {
        await api.put(
          `/apis/products/products/${editProduct.id}`,
          dataProduct,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
      } else {
        await api.post("/apis/products/products", dataProduct, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
      }
      if (onSuccess) {
        onSuccess();
      }
      const modalElement = document.getElementById(
        type === "edit" ? "editModal" : "addModal"
      );
      const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
      modal.hide();
      //   navigate("/products");
      SuccessAlert(type === "edit" ? "Product updated!" : "Product added!");
    } catch (err) {
      console.log("🚀 ~ ProductForm ~ err:", err.response.data || err.message);
      const errors = err.response.data.message || "Something went wrong!";

      ErrorAlert(errors, "Failed to update/add product!");
    }
  };
  async function fetchCategories() {
    try {
      const response = await api.get("/apis/products/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setCategories(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log("🚀 ~ fetchCategories ~ err:", err);
      const errors =
        err.response?.data?.message || err.message || "Something went wrong!";

      ErrorAlert(errors);
    }
  }
  return (
    <div
      className="modal fade"
      id={type === "edit" ? "editModal" : "addModal"}
      tabIndex={-1}
      aria-labelledby="addModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <form
            onSubmit={handleSubmit}
            id="form-add-product"
            className="from-wrapper"
          >
            <div className="modal-header">
              <h5 className="modal-title">
                {type === "edit" ? "Edit Product" : "Add Product"}
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
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                />
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
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
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
                {type === "edit" ? "Update Product" : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
