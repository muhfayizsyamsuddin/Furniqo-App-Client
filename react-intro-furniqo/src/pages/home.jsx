import React from "react";
import Sidebar from "../components/sidebar";
import ProductCard from "../components/product-card";
import Pagination from "../components/pagination";
import Footer from "../components/footer";

export default function HomePage() {
  const product = [
    {
      name: "Office Desk",
      price: "Rp 2.500.000",
      category: "Office",
      image:
        "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/220/1022010_PE832396_S5.webp",
    },
  ];
  const filterCategory = [
    {
      name: "Office",
    },
    {
      name: "Living Room",
    },
    {
      name: "Promo",
    },
  ];

  const listProduct = product.map((item, i) => (
    <div className="col-md-3 mb-3" key={i}>
      <ProductCard
        name={item.name}
        price={item.price}
        category={item.category}
        image={item.image}
      />
    </div>
  ));
  const listFilterCategory = filterCategory.map((item, i) => (
    <li key={i}>
      <a className="dropdown-item" href="#">
        {item.name}
      </a>
    </li>
  ));
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1 p-4">
        <div className="container my-4">
          <h2 className="mb-4">Produk</h2>
          {/* Kategori */}
          <div className="dropdown mb-4">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Pilih Kategori
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item active" href="#">
                  All Products
                </a>
              </li>
              {listFilterCategory}
            </ul>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <select className="form-select">
              <option value="">Pilih berdasarkan</option>
              <option value="price-asc">Produk Terbaru</option>
              <option value="price-desc">Produk Terlama</option>
            </select>
          </div>
        </div>
        <div className="row">{listProduct}</div>
        <Footer />
      </div>
    </div>
  );
}
