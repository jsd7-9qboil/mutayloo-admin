import { Outlet } from "react-router-dom";
// components
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
