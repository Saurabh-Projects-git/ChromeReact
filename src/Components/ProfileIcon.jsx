import React from "react";
import { TbGridDots } from "react-icons/tb";
import profilering from "../Assets/profilering.svg";
import profile from "../Assets/profile.jpg";

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
        <TbGridDots size={20} color="#5f6368" />
      </span>
      <span className="h-10 w-10 justify-center relative items-center">
        <img className="absolute" src={profilering} />
        <span className="h-8 w-8 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADr-3PrecoVO1hoAmq1qUaXmfmPNM30r2Nw&s"
          />
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
