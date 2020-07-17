import React from "react";
import './style.css';

const RoomInfo = ({roomName, userCount}) => {

    return (
        <>
            <p className="room-name" >{roomName}</p>
            <p className="user-count" >Users: {userCount}</p>
        </>


    )

}

export default RoomInfo;