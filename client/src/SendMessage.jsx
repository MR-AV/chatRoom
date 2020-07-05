import React from "react";


const SendMessage = ({message, setMessage, sendMessage}) => {

    return (
        <>
        <form onSubmit = {sendMessage}>
        <input 
        value = {message} 
        onChange = {(event) => (setMessage(event.target.value))}
        />
        <button type = "submit">Send Message</button>
        </form>
        </>



    )

}

export default SendMessage;