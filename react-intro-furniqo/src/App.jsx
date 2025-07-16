import "./App.css";
import HomePage from "./pages/home";
import Login from "./pages/login";
import ListCategory from "./pages/list-category";
import ListProduct from "./pages/list-product";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pub/products" element={<HomePage />} />
        <Route path="/pub/products/:id" />
        <Route path="/pub/categories" />
        <Route path="/login" element={<Login />} />
        <Route path="/register" />
        <Route path="/categories" element={<ListCategory />} />
        <Route path="/products" element={<ListProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
