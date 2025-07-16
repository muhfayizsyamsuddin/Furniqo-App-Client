import React from "react";
import Sidebar from "../components/sidebar";
import ProductCard from "../components/product-card";
import Pagination from "../components/pagination";
import Footer from "../components/footer";

export default function Detail() {
  return (
    <div>
      <Sidebar />
      <div className="main-content flex-grow-1 p-4">
        <div className="container">
          <h4 className="mb-4 fw-semibold">Produk Terkait</h4>
          <div className="row g-4 align-items-start">
            {/* Gambar Produk */}
            <div className="col-md-6">
              <img
                src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/220/1022010_PE832396_S5.webp"
                alt="Office Desk"
                className="img-fluid product-image rounded shadow-sm w-100"
              />
            </div>
            {/* Detail Produk */}
            <div className="col-md-6">
              <h2 className="fw-bold">Office Desk</h2>
              <p className="text-muted mb-1">Kategori: Office Furniture</p>
              <p className="fs-4 text-success fw-semibold">Rp 2.500.000</p>
              <p className="mt-3">
                Meja kantor minimalis dengan desain ergonomis. Terbuat dari kayu
                solid, dilengkapi dengan laci penyimpanan, ideal untuk ruang
                kerja maupun belajar.
              </p>
              <ul className="list-group my-3">
                <li className="list-group-item">
                  <strong>Stok:</strong> Tersedia
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
