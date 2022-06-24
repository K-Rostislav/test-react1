import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../componsents/Footer";
import Header from "../componsents/Header";

const MainLayout: React.FC = () => {
  return (
    <div className='page'>
      <Header/>
        <div className='main'>
          <Outlet />
        </div>
      <Footer />
    </div>
  );
}

export default MainLayout;

