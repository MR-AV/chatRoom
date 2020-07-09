import React,{useState} from "react";
import axios from "axios";

const error = "userName is Taken";
const Join = (props) => {

    const [name, setName] = useState('');


    function handleChange(e){
        e.preventDefault();
        if(name)
        {
                axios.get('/isUserPresent/' + props.name + "/" + name).then(response => {

                    if(!response.data)
                    props.setUsername(name);
                    else{
                        alert(error);
                    }
                })
               
        }
    }
    return (
        <>
         <form onSubmit = {handleChange}>
        <h1>{props.name}</h1>
        <input onChange = {(e) => {setName(e.target.value)}} placeholder ="Enter Your Name"  value = {name}/>
         <button type = "submit" >JOIN ROOM</button>
         </form> 
       
        </>
    )
}

export default Join;