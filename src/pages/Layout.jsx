import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  console.log("Layout rendu");

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
