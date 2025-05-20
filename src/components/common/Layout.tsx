import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../../assets/css/main.css";
import useAOS from "../../hooks/useAOS";

const Layout = (): JSX.Element => {
  useAOS();

  return (
    <div className="layout">
      <Header />
      <main className="main-content mt-[60px]">
        <Outlet /> {/* This will render your nested routes */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;