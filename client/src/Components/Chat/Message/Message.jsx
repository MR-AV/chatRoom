import React from "react";
import "./style.css"
import ReactEmoji from "react-emoji";

const Message = ({user, name}) => {


    const currentUser = name.trim().toLowerCase();

    console.log("name = ", name, "user.user.name", user.user);

    return (
        currentUser === user.user ? (
            <div className="chatBox justify-end">
                <div className="text">
                    <p className="username">{user.user}</p>
                    <p className="usertext">{ReactEmoji.emojify(user.text)}</p>
                </div>
            </div>
        ) : (
                <div className="chatBox justify-start ">
                    <div className="text">
                        <p className="username">{user.user}</p>
                        <p className="usertext">{ReactEmoji.emojify(user.text)}</p>
                    </div>
                </div>
            )
    );
}

export default Message;

