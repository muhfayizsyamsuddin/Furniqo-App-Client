import { Navigate, Outlet } from "react-router";
import Sidebar from "../components/sidebar";

export default function AuthenticatedLayout() {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
