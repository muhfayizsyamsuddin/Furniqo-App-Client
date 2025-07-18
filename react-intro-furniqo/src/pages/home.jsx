import React, { useEffect } from "react";
import Sidebar from "../components/sidebar";
import ProductCard from "../components/product-card";
import Pagination from "../components/pagination";
import Footer from "../components/footer";
import { useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  //   const [searchText, setSearchText] = useState("");

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://p2.khanz1.dev/apis/pub/products/products"
        // + searchText
      );
      console.log("🚀 ~ useEffect ~ response:", response.data.data);
      setProducts(response.data.data);
    } catch (err) {
      console.log("🚀 ~ fetchData ~ err:", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const categories = ["All", "Office Furniture", "Living Room", "Bedroom"];

  //   const [sortProducts, setSortProducts] = useState("");

  //   const [selectedCategory, setSelectedCategory] = useState("All");

  //   const filteredProduct = products
  //     .filter((item) =>
  //       selectedCategory === "All" ? true : item.category === selectedCategory
  //     )
  //     .sort((a, b) => {
  //       return sortProducts === "price-asc"
  //         ? new Date(b.createdAt) - new Date(a.createdAt)
  //         : sortProducts === "price-desc"
  //         ? new Date(a.createdAt) - new Date(b.createdAt)
  //         : 0;
  //     });

  const listProduct = products.map((item, i) => (
    <div className="col-md-3 mb-3" key={i}>
      <ProductCard
        id={item.id}
        name={item.name}
        price={item.price}
        category={item.category}
        imageUrl={item.imgUrl}
      />
    </div>
  ));

  const listFilterCategory = categories.map((category, i) => (
    <li key={i}>
      <button
        className={`dropdown-item`}
        // onClick={() => setSelectedCategory(category)}
      >
        {category}
      </button>
    </li>
  ));

  return (
    <div className="d-flex">
      <Sidebar
      // value={searchText}
      // onChange={(e) => setSearchText(e.target.value)}
      />
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
              Filter by category
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              {listFilterCategory}
            </ul>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <select
              className="form-select"
              //   onChange={(e) => setSortProducts(e.target.value)}
            >
              {/* <option value="">Sort by</option> */}
              <option value="price-asc">Latest</option>
              <option value="price-desc">Oldest</option>
            </select>
          </div>
        </div>
        <div className="row">{listProduct}</div>
        <Footer />
      </div>
    </div>
  );
}
