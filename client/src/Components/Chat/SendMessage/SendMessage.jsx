import React, {useState} from "react";
import './style.css';
import SendIcon from '@material-ui/icons/Send';



const SendMessage = ({message, setMessage, sendMessage}) => {


    const [height, setHeight] = useState(null);


    function handleKeyPress(event){

        if(event.key === ' ' || event.key === "Enter"){
            
            if(message === "")
            event.preventDefault();

            else{
                if(event.key === "Enter"){
                    sendMessage(event);
                    event.target.innerText = "";
                }
            }
        }
    }

    return (
         <form  onSubmit={sendMessage} className="msg-field">

            <div 
            id = "editableDiv"
            contentEditable = "true"
            className="input-msg-field" 
            onInput = {(event) => setMessage(event.target.innerText) }
            onKeyPress = {handleKeyPress}>
            </div>
            <button
                className="send-btn"
                type="submit"
                onClick = {() => {document.getElementById('editableDiv').innerHTML = ""}}

            ><SendIcon /></button>
           
        </form> 
    );
}

export default SendMessage;