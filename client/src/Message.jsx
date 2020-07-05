import React from "react";
import "./Message/Message.css"

const Message = ({user, name}) => {


    const currentUser = name.trim().toLowerCase();

    console.log("name = ", name, "user.user.name", user.user);

    return (
        currentUser === user.user  ? (
        <div className = "chatBox justify-end"> 
        <p className ="username">{user.user}</p>
        <div className = "text">
        <p className = "usertext">{user.text}</p>
        </div>
        
        </div>

        )
        :
        (<div className = "chatBox justify-start "> 
        
        <div className = "text">
        <p className = "usertext">{user.text}</p>
        </div>
        <p className ="username">{user.user}</p>
        </div>
        )

        
    )
}

export default Message;

