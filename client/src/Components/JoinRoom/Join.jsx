import React,{useState} from "react";
import { navigate} from "hookrouter";


const Join = (props) => {

    const [name, setName] = useState('');

    function handleChange(e){
        e.preventDefault();
        if(name)
               navigate('/room/' + props.name + '/chat/' + name , true);
    
        

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