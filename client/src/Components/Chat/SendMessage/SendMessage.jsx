import React from "react";
import './style.css';

const SendMessage = ({message, setMessage, sendMessage}) => {

    return (
        <form onSubmit={sendMessage} className="msg-field">
            <input
                className="input-msg-field"
                value={message}
                onChange={(event) => (setMessage(event.target.value))}
            />
            <button
                className="send-btn"
                type="submit"
            >Send Message</button>
        </form>
    );
}

export default SendMessage;