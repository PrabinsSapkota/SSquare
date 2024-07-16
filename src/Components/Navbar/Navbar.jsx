import React from "react";
import logo from "../../assets/logo.png";
import vector from "../../assets/Vector.svg";
import instalogo from "../../assets/instalogo.svg";
import facebooklogo from "../../assets/facebooklogo.svg";
import "./Navbar.css";  
const Navbar = () => {
  return (
    <div className="navbar mx-[122px] mt-[13px] w-[1196px] h-[132px]">
      <div className="flex gap-[620px] ">
        <div>
          <img src={logo} className="w-[185px] h-[36px]" alt="logo" />
        </div>
        <div className="flex gap-[137px]">
          <div className="flex">
            <img src={vector} alt="" />
            <div>
            <h3 className="text-black">call us on</h3>
            <p className="text-black">(232) 456-7890</p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <img src={instalogo} className="w-[20px] h-[20px]" alt="" />
            <img src={facebooklogo} className="w-[20px] h-[20px]"  alt="" />
          </div>
        </div>
      </div>
      <div className="seccond-nav mt-[26px]">
        <ul className="flex space-x-[50px] mt-[26px] cursor-pointer pl-[10px] ">
            <li  className=" hover:bg-sky-700 rounded-xl">Home</li>
            <li className=" hover:bg-sky-700 rounded-xl">About Us</li>
            <li className=" hover:bg-sky-700 rounded-xl">Personal Taxes</li>
            <li className=" hover:bg-sky-700 rounded-xl">Business Taxes</li>
            <li className=" hover:bg-sky-700 rounded-xl">Blog</li>
            <li className=" hover:bg-sky-700 rounded-xl">Upload Documents</li>
            <li className=" hover:bg-sky-700 rounded-xl">Contact Us</li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
