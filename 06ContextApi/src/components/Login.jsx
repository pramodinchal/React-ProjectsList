import React from "react";
import  { useState, useContext } from "react"

import UserContext from "../context/UserContext"

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
   const {setData} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setData({username, password})
        console.log(username   ,        password);
    }
  return (
    <div>
        <h1>Login</h1>
        <label>UserName</label>
        <input type="text" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
        <br/>
        <label>Password</label>
        <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;