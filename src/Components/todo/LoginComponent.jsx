
import { BrowserRouter, Link, Route, Routes , useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './security/AuthContext'

export default function LoginComponent()
{
    const[username,setUsername]= useState('admin')
    const[password,setPassword]= useState('pass')
    const[message,setMessage]= useState('')
    const Navigate = useNavigate();
    const authContext = useAuth()


    function handleUsernameChange(event)
    {
        //setUsername((username)=>"Abhay")
        setUsername((username)=>event.target.value)

    }
    function handlePasswordChange(event)
    {
        setPassword((password)=>event.target.value)
    }
    async function Authenticate() {
        if ( await authContext.login(username,password)) {
          Navigate(`/welcome/${username}`)
        } else {
          setMessage('Failure'); // Set failure message
        }
      }
    return(
        <div className="LoginForm">
    {/* {message && <div className={message === 'Success' ? 'successMessage' : 'failureMessage'}>{message}</div>} */}
            {/* <div className='auth'>{message}</div> */}
            {message && <div className="failureMessage" >{message}</div>}
            <div>
                <label>UserName:</label>
                <input type="text" name="username" id="name" value={username} onChange={handleUsernameChange}></input>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" id="password" onChange={handlePasswordChange}></input>
            </div>
            <div>
                <button type="button" onClick={Authenticate} name="login">Login </button>
            </div>

        </div>
    )
}
