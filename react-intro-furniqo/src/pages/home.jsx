import React, { useEffect } from "react";
import Sidebar from "../components/sidebar";
import ProductCard from "../components/product-card";
import Pagination from "../components/pagination";
import Footer from "../components/footer";
import { useState } from "react";
import axios from "axios";

const Base_URL = "https://api-furniqo.faizms.com";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("ASC");
  const [page, setPage] = useState(1);
  const [selectCategory, setSelectCategory] = useState("");

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState({
    page: 1,
    limit: 10,
    total: 195,
    totalPages: 20,
    hasNext: true,
    hasPrev: false,
  });
  useEffect(() => {
    async function fetchProduct() {
      const url = new URL(Base_URL);
      url.pathname = "/pub/products";
      if (search) {
        // url.searchParams.append("q", search);
        url.searchParams.append("search", search);
      }
      if (selectCategory) {

        // url.searchParams.append("categoryId", Number(selectCategory));
        url.searchParams.append("filter", selectCategory);
      }
      url.searchParams.append("page", page.toString());
      url.searchParams.append("sort", sort);
      // console.log("url fetch:", url.toString());
      // console.log("kategori yg dipilh::", selectCategory);

      try {
        const response = await axios.get(url.toString());
        // console.log("produk yg diterima:", response.data.data);
        // setProducts(data.data);
        const rawData = response.data.data;
        setProducts(rawData);

        // const filtered = selectCategory
        //   ? rawData.filter((item) => item.category?.id == selectCategory)
        //   : rawData;

        // setProducts(filtered);
        setMeta({
          page: response.data.page,
          totalPages: response.data.totalPage,
          total: response.data.totalData,
          hasPrev: response.data.page > 1,
          hasNext: response.data.page < response.data.totalPage,
        });
      } catch (err) {
        console.log("🚀 ~ fetchProduct ~ err:", err);
      }
    }
    fetchProduct();
  }, [search, sort, page, selectCategory]);

  async function fetchCategories() {
    const url = new URL(Base_URL);
    url.pathname = "/pub/categories";
    try {
      const response = await axios.get(url.toString());
      // setCategories(response.data.data);
      setCategories(response.data);
      // console.log("🚀 ~ fetchProduct ~ response:", response.data.data);
    } catch (err) {
      console.log("🚀 ~ fetchCategories ~ err:", err);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  // const listProduct = products.map((item, i) => (
  //   <div className="col-md-3 mb-3" key={i}>
  //     <ProductCard
  //       id={item.id}
  //       name={item.name}
  //       price={item.price}
  //       category={item.category}
  //       imageUrl={item.imageUrl}
  //     />
  //   </div>
  // ));
  const listProduct = products.map((item) => {

  return (
    <div className="col-md-3 mb-3" key={item.id}>
      <ProductCard
        id={item.id}
        name={item.name}
        price={item.price}
        imageUrl={item.imageUrl}
        category={item.Category}
      />
    </div>
  );
});

  const listFilterCategory = categories.map((category, i) => (
    <li key={i}>
      <button
        className={`dropdown-item ${
          selectCategory === category.id ? "active" : ""
        }`}
        onClick={() => {
          // console.log("klik categori", category.name, "id", category.id);

          setSelectCategory(String(category.id));
          setPage(1);
        }}
      >
        {category.name}
      </button>
    </li>
  ));
  // const listFilterCategory = [];
  return (
    <div className="d-flex">
      <Sidebar search={search} setSearch={setSearch} />
      <div className="main-content flex-grow-1 p-4">
        <div className="container my-4">
          <h2 className="mb-4">Product</h2>
          {/* Kategori */}
          <div className="dropdown mb-4">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              {selectCategory
                ? categories.find((cat) => cat.id === selectCategory)?.name ||
                  "Filter by category"
                : "Filter by category"}
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <button
                  className={`dropdown-item ${
                    selectCategory === "" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectCategory("");
                    setPage(1);
                  }}
                >
                  All Categories
                </button>
              </li>
              {listFilterCategory}
            </ul>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <select
              className="form-select"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setPage(1);
              }}
            >
              {/* <option value="">Sort by</option> */}
              <option value="ASC">Oldest</option>
              <option value="DESC">Latest</option>
            </select>
          </div>
        </div>
        <div className="row">{listProduct}</div>
        {/* <div>
          <pre>{JSON.stringify(meta, null, 2)}</pre>
        </div> */}
        <Pagination meta={meta} onPageChange={setPage} />
        <Footer />
      </div>
    </div>
  );
}
