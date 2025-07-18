import { Outlet } from "react-router";
import Sidebar from "../components/sidebar";

export default function AuthenticatedLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
