import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {Button} from "@mui/material";


function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon className='sidebar__twitterIcon' />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Contact" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Categories" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>

      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}

      {/* Twitt -> */}
    </div>
  );
}
export default Sidebar;
