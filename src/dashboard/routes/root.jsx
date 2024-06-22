import Navbar from "../../components/sidebar/navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="block md:hidden">
        <Navbar />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
