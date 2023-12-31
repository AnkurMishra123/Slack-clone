import React, { useEffect, useState } from 'react'
import "./Sidebar.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SidebarOption from './SidebarOption.js';
// import { BookmarkBorder, Expand, ExpandLess, PeopleAlt } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from './firebase.js';

const Sidebar = () => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) =>
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        );
    }, []);

    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Habitat to learn</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Ankur
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            {/* <SidebarOption Icon={PeopleAltIcon} title="People and User Group" /> */}
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File Browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
            <hr />
            {/* <SidebarOption Icon={ExpandLessIcon} title="Show Less" /> */}
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channels" />
            {channels.map((channel) => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}

export default Sidebar