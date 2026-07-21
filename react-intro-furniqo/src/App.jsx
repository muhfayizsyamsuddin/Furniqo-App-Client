import "./App.css";
import HomePage from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/login";
import ListCategory from "./pages/list-category";
import ListProduct from "./pages/list-product";
import AddUser from "./pages/add-user";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthenticatedLayout from "./layout/authenticated-layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/pub/products" replace />} />
        <Route path="/pub/products" element={<HomePage />} />
        <Route path="/pub/products/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<AuthenticatedLayout />}>
          {/* <Route index element={<ListProduct />} /> */}
          <Route path="categories" element={<ListCategory />} />
          <Route path="products" element={<ListProduct />} />
          {/* <Route path="products/:id" element={<Detail />} /> */}
          <Route path="add-user" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;