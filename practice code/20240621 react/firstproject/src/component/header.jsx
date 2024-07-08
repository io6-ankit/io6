import React from "react";

import "./header.css";

// icons import
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaYoutube } from "react-icons/fa";
// import { MdKeyboardVoice } from "react-icons/md";
// import { RiVideoUploadLine } from "react-icons/ri";
// import { FaRegBell } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaVideoSlash } from "react-icons/fa6";
import { GrAppsRounded } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

//Header component create
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <GiHamburgerMenu className="header-icons" />

          <IoLogoYoutube className="header-icons" color="red" />
          <h3 className="paragraph">Youtube</h3>
        </div>
        <div className="header-input">
          <div className="header-middle">
            <input className="SearchInput" placeholder="search" type="text" />

            <button className="header-searchBtn">
              <IoIosSearch />
            </button>
            <FaMicrophone className="header-icons" />
          </div>
        </div>
        <div className="header-right">
          <FaVideoSlash className="header-icons" />
          <GrAppsRounded className="header-icons" />
          <RxAvatar className="header-icons" />
          <IoIosNotificationsOutline className="header-icons" />
        </div>
      </div>
    </>
  );
};
// Header component export
export default Header;
