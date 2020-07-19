import React,{useState} from "react";
import ReactEmoji from "react-emoji";
import "./style.css"

const Message = ({user:msg, name}) => {
    const [countLen, setCountLen] = useState(1);
    const maxCount = Math.ceil(msg.text.length / 200);

    const currentUser = name.trim().toLowerCase();

    function getMessage(){
        return msg.text.substr(0, countLen * 200);
    }

    function extendMessage() {
        setCountLen(countLen + 1);
    }
    function contractMessage() {
        setCountLen(1);
    }


    return (
        currentUser === msg.user ? (
            <div className="chatBox justify-end">
                <div className="text">
                    <div className="usertext user-color" >
                        {ReactEmoji.emojify(getMessage())}
                        {countLen < maxCount && <span onClick={extendMessage} className="read-more">  read more..</span>}
                        <br/>
                        {countLen>1 && <span onClick={contractMessage}className="read-more"> contract</span>}
                    </div> 
                    <div className="username">you</div> 
                </div>
            </div>
        ) : (
                <div className="chatBox justify-start ">
                    <div className="text">
                        <div className="username">{msg.user}</div> 
                        <div className="usertext">
                            {ReactEmoji.emojify(getMessage())}
                            {countLen < maxCount && <span onClick={extendMessage} className="read-more">  read more..</span>}
                            <br/>
                            {countLen>1 && <span onClick={contractMessage}className="read-more"> contract</span>}
                        </div> 
                        
                    </div>
                </div>
            )
    );
}

export default Message;

