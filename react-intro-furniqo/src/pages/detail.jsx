import React, { useEffect } from "react";
import Sidebar from "../components/sidebar";
import ProductCard from "../components/product-card";
import Pagination from "../components/pagination";
import Footer from "../components/footer";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Detail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://p2.khanz1.dev/apis/pub/products/products/${id}`
        );
        console.log("🚀 ~ useEffect ~ response:", response.data.data);
        setProductDetail(response.data.data);
      } catch (err) {
        console.log("🚀 ~ fetchData ~ err:", err);
      }
    }
    fetchData();
  }, [id]);

  if (!productDetail) {
    return <div className="text-center p-4">Loading...</div>;
  }
  return (
    <div>
      <Sidebar />
      <div className="main-content flex-grow-1 p-4">
        <div className="container">
          <h4 className="mb-4 fw-semibold">Product Detail</h4>
          <div className="row g-4 align-items-start">
            {/* Gambar Produk */}
            <div className="col-md-6">
              <img
                src={productDetail.imgUrl}
                alt={productDetail.name}
                className="img-fluid product-image rounded shadow-sm w-100"
              />
            </div>
            {/* Detail Produk */}
            <div className="col-md-6">
              <h2 className="fw-bold mb-2">{productDetail.name}</h2>
              {/* <p className="text-muted mb-1"> */}
              <p className="badge bg-secondary mb-2">
                Category: {productDetail.category.name}
              </p>
              <p className="fs-4 text-success fw-semibold">
                Rp {productDetail.price.toLocaleString("id-ID")}
              </p>
              <div className="border rounded p-3 mb-3 bg-light ">
                <p className="small mb-0">{productDetail.description}</p>
              </div>
              <ul className="list-group w-75">
                <li className="list-group-item d-flex justify-content-between align-items-center col-md-3 px-3">
                  <strong>Stok:</strong>
                  <span>{productDetail.stock}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
