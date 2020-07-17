import React, {useState} from "react";
// import { TextInput } from 'react-native';
import './style.css';
import SendIcon from '@material-ui/icons/Send';


// let scrollHeight = -1;
const SendMessage = ({message, setMessage, sendMessage}) => {


    const [height, setHeight] = useState(null);

    // async await should be working, but it isn't.

    // async function foo(text){

    //     await setMessage(text);
    // }
    // function handleKeyPress(event){

        
    //     const text = event.target.innerText;
    //     if(event.key === "Enter"){
    //         console.log("inside if");  
    //         console.log("text ", text);
    //         event.target.innerText = "";
    //         //  foo(text).then(sendMessage(event));
    //         //  setMessage(text);
    //         // sendMessage(event);
    //     }
    //     else{
    //         console.log("inside else");  
    //         console.log("text ", text);
    //         setMessage(text);
    //     }
    // }

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


            {/* <textarea rows = "1" className="input-msg-field" 
            onChange = {event => setMessage(event.target.value)}
            onKeyPress = {handleKeyPress}
                value = {message}
            /> */}
            
            {/* <span className = "hide-span"></span> */}
            <button
                className="send-btn"
                type="submit"
                onClick = {() => {document.getElementById('editableDiv').innerHTML = ""}}

            ><SendIcon /></button>
           
        </form> 
    );
}

export default SendMessage;