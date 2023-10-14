import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./Chat.css"
import db from './firebase';

const Chat = () => {
    const { roomId }= useParams();
    const [roomDetails,setRoomDetails]=useState(null);

    useEffect(() =>{
        if(roomId)
        {
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot(snapshot =>(
                setRoomDetails(snapshot.data())
            ))
        }
    },[roomId]);
    console.log(roomDetails);

  return (
    <div className='chat'>
        <div className="chat__header">
            <div className="chat__headerLeft">
                <h4 className="chat__channelName">
                    <strong>#general</strong>
                    <StarBorderOutlinedIcon />
                </h4>
            </div>
            <div className="chat__headerRight">
                <p>
                      <InfoOutlinedIcon />Details
                </p>
            </div>
        </div>
    </div>
  )
}

export default Chat