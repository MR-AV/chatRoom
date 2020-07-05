import React from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from 'glamor';
const ROOT_CSS = css({
    height: 300,
    width: 260
  });

const DisplayMessages = ({messages, name}) => {

    return (
        <>
            
        <ScrollToBottom className = {ROOT_CSS}>
           { messages.map((user, id) => <Message key = {id} user = {user} name = {name}/>) }
           
           </ScrollToBottom>
        </>


    )

}

export default DisplayMessages;