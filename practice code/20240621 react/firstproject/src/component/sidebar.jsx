import React from "react";
import "./sidebar.css";
import { MdHome } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { FaExchangeAlt } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { TiStopwatch } from "react-icons/ti";
import { AiOutlineLike } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";

const sidebar = () => {
  return (
    <>
      <div className="main-div">
        <div className="icons-1">
          <a href="link" id="link">
            <MdHome /> <span className="sidebar">Home</span>
          </a>
        </div>
        <div className="icons-1">
          <a href="link" id="link">
            <MdOutlineSubscriptions />
            <span className="sidebar">Subscriptions</span>
          </a>
        </div>
        <div className="icons-1">
          <a href="link" id="link">
            <FaArrowUpWideShort />
            <span className="sidebar">Short Video</span>
          </a>
        </div>
        <div className="icons-1">
          <a href="link" id="link">
            <FaExchangeAlt />
            <span className="sidebar">Your Channel</span>
          </a>
        </div>
        <div className="icons-1">
          <a href="link" id="link">
            <FaHistory />
            <span className="sidebar">History</span>
          </a>
        </div>
        <div className="icons-1">
          <a href="link" id="link">
            <MdOutlinePlaylistAddCheck />
            <span className="sidebar">Playlist</span>
          </a>
        </div>
        <div className="icons-1">
          <a href="link" id="link">
            <MdOndemandVideo />
            <span className="sidebar">Your Video</span>
          </a>
        </div>
        <div className="icons-1">
          <a href="link" id="link">
            <TiStopwatch />
            <span className="sidebar">Watch Later</span>
          </a>
        </div>
        <div className="icons-1">
          <a href="link" id="link">
            <AiOutlineLike />
            <span className="sidebar">Liked Video</span>
          </a>
        </div>
        <div className="icons-1">
          <a href="link" id="link">
            <FaDownload />
            <span className="sidebar">Downloads</span>
          </a>
        </div>
      </div>
    </>
  );
};
export default sidebar;
