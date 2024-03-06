import React from "react";
import Logo from "../assets/logo1.png";
const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-5">
          <a href="#">
            <img src={Logo} height={235} width={235} alt="" />
          </a>
          <button className="btn btn-sm ">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
