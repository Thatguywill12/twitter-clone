import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/List';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";


function Sidebar() {
    return (
        <div className="sidebar">
            {/* twitter icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>
            < SidebarOption active Icon={HomeIcon} text="Home"/>
            < SidebarOption Icon={SearchIcon} text="Explore"/>
            < SidebarOption Icon={NotificationsIcon} text="Notifications"/>
            < SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            < SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            < SidebarOption Icon={ListIcon} text="Lists"/>
            < SidebarOption Icon={PersonOutlineIcon} text="Profile"/>
            < SidebarOption Icon={MoreHorizIcon} text="More"/>
         
            {/* tweet button */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

           
        </div>
    )
}

export default Sidebar;
