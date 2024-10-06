import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';


function Layout({ backgroundImage }) {
  return (
    <div className="h-screen w-screen bg-cover bg-center z-0">
      <img src={backgroundImage} alt="Háttérkép" className="hidden" />
      {/* <Navbar /> */}

      <div>Szia</div>
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;