import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* {Twiiter Icon} */}
            <TwitterIcon className = 'sidebar__twitterIcon'/>
            < SidebarOption active Icon = {HomeIcon} text = 'Home'/>
            < SidebarOption Icon = {SearchIcon} text = 'Explore'/>
            < SidebarOption Icon = {NotificationsIcon} text = 'Notifications'/>
            < SidebarOption Icon = {MessageIcon} text = 'Messages'/>
            < SidebarOption Icon = {BookmarksIcon} text = 'Bookmarks'/>
            < SidebarOption Icon = {ListAltIcon} text = 'Lists'/>
            < SidebarOption Icon = {PermIdentityIcon} text = 'Profile'/>
            < SidebarOption Icon = {MoreHorizIcon} text = 'More'/>

            <Button variant = 'outlined' className = 'sidebar__tweetIcon' fullWidth>Tweet</Button>

        </div>
    )
}

export default Sidebar

