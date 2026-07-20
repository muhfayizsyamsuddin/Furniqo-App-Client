import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import { api } from "../helpers/http-client";

export default function ListCategory() {
  const [categories, setCategories] = useState([]);

  async function fetchData() {
    try {
      const response = await api.get("/categories");
      // setCategories(response.data.data);
      
      const dataList = response.data?.data || response.data;
      setCategories(Array.isArray(dataList) ? dataList : []);
    } catch (err) {
      console.log("🚀 ~ fetchData ~ err:", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="d-flex min-vh-100">
      {/* <div className="row"> */}
      <div className="main-content flex-grow-1 p-4">
        <h1 className="text-light mb-2">List of Categories</h1>
        <div className="container mt-4 ms-5">
          <div className="col-6 table-responsive">
            <table className="table table-dark table-hover caption-top align-middle rounded overflow-hidden">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody id="table-product">
                {categories.map((category, i) => (
                  <tr key={category.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{category.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
