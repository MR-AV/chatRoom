import React from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from 'glamor';

const ROOT_CSS = css({
    margin: '10px',
    height: "70vh"
  });

const DisplayMessages = ({messages, name}) => {

    return (
        <ScrollToBottom className = {ROOT_CSS}>
           { messages.map((user, id) => <Message key = {id} user = {user} name = {name}/>) }
        </ScrollToBottom>
    )

}

export default DisplayMessages;