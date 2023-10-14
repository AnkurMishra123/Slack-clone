import React from "react";
import { useNavigate } from "react-router-dom";
import db from "./firebase.js";
import "./SidebarOption.css";
function SidebarOption({ Icon, title, addChannelOption, id }) {
    const navigate = useNavigate();
    const selectChannel = () => {
        if (id!=null) {
            navigate(`/rooms/${id}`);
        } else {
            navigate(title);
        }
    };

    const addChannel = () => {
        const channelName = prompt("Enter channel name");

        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            });
        }
    };
    return (
        <div
            className="sidebarOption"
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#</span>
                    {title}
                </h3>
            )}
        </div>
    );
}

export default SidebarOption;