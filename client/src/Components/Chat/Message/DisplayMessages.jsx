import React from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from 'glamor';
import './style.css'
const ROOT_CSS = css({
    // margin: '10px',
    paddingBottom : "10px",
    height: "100%"
  });

const DisplayMessages = ({messages, name}) => {

    return (
        <div className="msg-box">
            <ScrollToBottom className = {ROOT_CSS}>
                {messages.map((user, id) => <Message key = {id} user = {user} name = {name}/>) }
            </ScrollToBottom>
        </div>
    )

}

export default DisplayMessages;