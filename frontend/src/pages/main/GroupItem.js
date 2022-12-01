import { Avatar } from '@mui/material';
import React from 'react';
import './Story.css';

const GroupItem = ({ groupAvatar, ownerAvatar, title, onClick }) => {
    return (
        <div onClick={() => onClick()} className="story" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${groupAvatar})`}}>
            <Avatar src={ownerAvatar} className="storyAvatar" />
            <h4>{title}</h4>
        </div>
    )
}

export default GroupItem;