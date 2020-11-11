import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({ children }) => (
  <div className="App">
    <Menu />
    {children}
    <Footer />
  </div>
);

export default Layout;
