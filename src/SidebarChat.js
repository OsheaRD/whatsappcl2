import React from 'react'
import {Avatar} from "@material-ui/core";
import "./SidebarChat.css";

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat__info">
            <h2>Room name</h2>
            <p>Last messsage content</p>
        </div>
</div>
    );
}

export default SidebarChat
