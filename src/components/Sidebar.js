import React from "react";
import logo from "../assets/logo-container.png";
import home from "../assets/home-icon.svg";
import detail from "../assets/detail-icon.svg";
import userIcon from "../assets/ic-user.svg";

const Sidebar = () => {
  return (
    <div className="w-64 bg-primary fixed top-0 left-0 right-0 h-screen">
      <div className="mx-auto mt-9 w-60 ">
        <img src={logo} alt="logo" />

        <div className="menu-button">
          <img src={home} alt="home" className="icon-sidebar" />
          <p className="pl-2">Home</p>
        </div>
        <p className="text-gray-500">Product</p>
        <div className="menu-button">
          <img src={detail} alt="detail" />
          <p className="pl-2">Detail Product</p>
        </div>
      </div>

      <div className="mx-auto w-60 text-white flex absolute bottom-8 left-2">
        <div className="w-12 h-12 text-center leading-10 rounded-md bg-orange-600 ">
          <p className="font-base">E</p>
        </div>
        <div className="flex flex-col ml-1 mr-7">
          <span>#ID1234</span>
          <span>email@gmail.com</span>
        </div>
        <img src={userIcon} alt="logo" />
      </div>
    </div>
  );
};

export default Sidebar;
