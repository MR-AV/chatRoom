import React,{useState} from "react";
import axios from "axios";
import NameError from './NameError';
import './style.css';
import {Card} from "react-bootstrap";
const error = "userName is Taken";
function Join(props){
    const [name, setName] = useState('');
    const [err, setErr] = useState([false, ""]);

    function checkUsername(name) {
        return /^\w*$/.test(name);
    }

    function handleUsernameChange(event) {
        let username = event.target.value;
        setName(username);
        if (checkUsername(username) === false)
            setErr([true, 'Name should only have alphabets, numbers and "_"']);
        else
            setErr([false, '']);
    }
    
    function handleChange(event){
        event.preventDefault();
        if(!err[0] && checkUsername(name)){
            axios.get('/isUserPresent/' + props.name + "/" + name).then(response => {
                if (!response.data.isUserPresent)
                    props.setUsername(name);
                else {
                    setErr([true,'Username already present']);
                }
            });
        }
    }
    return (
        <>
            <form onSubmit={handleChange}>

            <div style={{ height: '700px', background : "black"}} className = "d-flex justify-content-center align-items-center" >
            <Card className = "text-center" style={{ width: '18rem' }}>
            
            <Card.Header className = "text-white bg-info mb-3">{props.name}</Card.Header>  
    

            <Card.Body>
                <label for = "username" style = {{display : "block", textAlign: "justify"}}>UserName:  </label>
                <input
                    className="username-input"
                    onChange={handleUsernameChange}
                    placeholder="Enter Your Name"
                    value={name}
                    style={err[0] ? { boxShadow:"0 0 3px red" }:{}}
                    name = "username"
                />
            </Card.Body>
            
                <button  type="submit" className = "btn btn-primary" >JOIN ROOM </button>
                {err[0] && <NameError error={err[1]}/>}
                
               
                </Card>
                </div>
            </form> 
        </>
    );
}

export default Join;