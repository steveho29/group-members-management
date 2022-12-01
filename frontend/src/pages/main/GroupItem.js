import { Avatar } from '@mui/material';
import React from 'react';
import './Story.css';

const formatURLMedia = (url) => {
    if (!url) return null
    const host = (new URL(url)).host
    console.log(host)
    if (host == 'googleusercontent')
        return url
    return url?.replace(host,  process.env.REACT_APP_SERVER_HOST)
}

const GroupItem = ({ groupAvatar, ownerAvatar, title, onClick }) => {
    ownerAvatar = formatURLMedia(ownerAvatar)
    groupAvatar = formatURLMedia(groupAvatar)
    return (
        <div onClick={() => onClick()} className="story" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${groupAvatar})`}}>
            <Avatar src={ownerAvatar} className="storyAvatar" />
            <h4>{title}</h4>
        </div>
    )
}

export default GroupItem;