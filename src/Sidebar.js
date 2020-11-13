import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import { DonutLargeOutlined, MoreVert, SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton} from "@material-ui/core";
import SidebarChat from './SidebarChat';

const Sidebar = () => {
    return (
        <div className='sidebar'> 
            <div className="sidebar__header">
                <Avatar src="https://avatars2.githubusercontent.com/u/49094220?s=460&u=ba5f04fcf88eb878a70c0342589927c02802e19f&v=4" />  

                <div className="sidebar__headerRight">

                <IconButton>
                    <DonutLargeOutlined />
                </IconButton>
               
                <IconButton>
                    <ChatIcon />
                </IconButton>
                
                <IconButton>
                    <MoreVert />
                </IconButton>
                
                 </div>
            </div>


            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div> 

<div className= "sidebar__chats">
    <SidebarChat /> 
    <SidebarChat /> 
    <SidebarChat /> 


</div>


        </div>
     

    );
}

export default Sidebar
