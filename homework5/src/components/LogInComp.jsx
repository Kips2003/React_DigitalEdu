import React from 'react'
import {useState} from 'react'

const LogInComp = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const [incorrect, setincorrect] = useState(false)

    const userIsValid = userInfo.email==="digitalAcademy@gmail.com" && userInfo.password === "tato123";

    const submitHandler = (e) => {
        e.preventDefault()
        if(userIsValid){
            
        }
        else{
            setincorrect(true);
        }
    }
  return (
    <form onSubmit={submitHandler}>
        {incorrect && <p>Incorrect Credentials</p>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={(e) => setUserInfo(prev => ({...prev, [e.target.name]: e.target.value}))}/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={(e) => setUserInfo(prev => ({...prev, [e.target.name]: e.target.value}))}/>
        
        <button type='submit'>Log In</button>
    </form>
)
}

export default LogInComp