import React from 'react'
import { useState } from 'react'

const SignInComp = () => {

    const [userInfo, setuserInfo] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        Email: '',
        password: '',
        confirmPassword: ''
    })

    const submitHandler = (e) => {
        e.preventDefault()

    }

    console.log(userInfo)

    return (
    <form onSubmit={submitHandler}>
        <label htmlFor="userName">User Name:</label>
        <input type="text" id="userName" name="userName" onChange={(e) => setuserInfo(prev => ({...prev, [e.target.name]: e.target.value}))}/>

        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" onChange={(e) => setuserInfo(prev => ({...prev, [e.target.name]: e.target.value}))}/>

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" onChange={(e) => setuserInfo(prev => ({...prev, [e.target.name]: e.target.value}))}/>

        <label htmlFor="Email">Email:</label>
        <input type="email" id="Email" name="Email" onChange={(e) => setuserInfo(prev => ({...prev, [e.target.name]: e.target.value}))}/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e) => setuserInfo(prev => ({...prev, [e.target.name]: e.target.value}))}/>

        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input type="password" id="confirmPassword" name="confirmPassword" onChange={(e) => setuserInfo(prev => ({...prev, [e.target.name]: e.target.value}))}/>

        <button type="submit">Register</button>
    </form>
    )
}

export default SignInComp