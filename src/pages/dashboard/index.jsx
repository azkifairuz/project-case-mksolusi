import { Outlet } from "react-router-dom";
import SidebarDashboard from "./nav";
import FooterDashboard from "./footer";

export default function Dashboard() {
  return (
    <>
      <div className="flex gap-2">
        <SidebarDashboard />
        <Outlet />
      </div>
      <FooterDashboard />
    </>
  );
}
