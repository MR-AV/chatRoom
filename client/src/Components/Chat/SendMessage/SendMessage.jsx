import React, {useState} from "react";
import './style.css';
import SendIcon from '@material-ui/icons/Send';
import { TextareaAutosize } from '@material-ui/core';


const SendMessage = ({message, setMessage, sendMessage}) => {


    function handleKeyPress(event){

        if(event.key === ' ' || event.key === "Enter"){
            
            if(message === "")
            event.preventDefault();

            else{
                if(event.key === "Enter"){
                    sendMessage(event);
                    
                }
            }
        }
    }

   
    return (
         <form  onSubmit={sendMessage} className="msg-field">

            <TextareaAutosize
            rowsMax={10}
            className="input-msg-field" 
            onInput = {(event) => setMessage(event.target.value) }
            onKeyPress = {handleKeyPress}
            value = {message}
            autoFocus
            />
            <button
                className="send-btn"
                type="submit"
            ><SendIcon /></button>
           
        </form> 
    );
}

export default SendMessage;