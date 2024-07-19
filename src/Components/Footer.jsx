import React from "react";
import { settingMenu, quickLinks } from "../Utils/Constants";
const Footer = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="flex py-[15px] md:px-[30px] border-[#dadce0]">
        <span className="text-[#70767a] text-[15px] leading-none">India</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px]">
        <diV className="flex justify-center">
          {quickLinks.map((menu, index) => (
            <span
              className="text-[#70767a] text-[15px] leading-none p-[10px] md:[15px]"
              key={index}
            >
              {menu}
            </span>
          ))}
        </diV>
        <diV className="flex justify-center">
          {settingMenu.map((menu, index) => (
            <span
              className="text-[#70767a] text-[15px] leading-none p-[10px] md:[15px]"
              key={index}
            >
              {menu}
            </span>
          ))}
        </diV>
      </div>
    </div>
  );
};

export default Footer;
