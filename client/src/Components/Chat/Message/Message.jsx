import React from "react";
import "./style.css"
import ReactEmoji from "react-emoji";

const Message = ({user, name}) => {


    const currentUser = name.trim().toLowerCase();

    // console.log("name = ", name, "user.user.name", user.user);

    return (
        currentUser === user.user ? (
            <div className="chatBox justify-end">
                <div className="text">
                <div className="usertext user-color" >{ReactEmoji.emojify(user.text)}</div> 
                    <div className="username">you</div> 
                </div>
            </div>
        ) : (
                <div className="chatBox justify-start ">
                    <div className="text">
                    <div className="username">{user.user}</div> 
                    <div className="usertext">{ReactEmoji.emojify(user.text)}</div> 
                    </div>
                </div>
            )
    );
}

export default Message;

