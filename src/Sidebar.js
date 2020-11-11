import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import { DonutLargeOutlined, MoreVert } from '@material-ui/icons';
import { Avatar, IconButton} from "@material-ui/core";

const Sidebar = () => {
    return (
        <div className='sidebar'> 
            <div className="sidebar__header">
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

         </div>

    )
}

export default Sidebar
