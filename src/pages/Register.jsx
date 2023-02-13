import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs,setInputs] = useState({
    "username":"",
    "password":"",
    "email":"",
  })

  const [err,setError] = useState(null)
  const navigate = useNavigate()

  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  };

  const handleChange = e =>{
      setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    const client = axios.create({
      baseURL: "http://localhost:19337/blog" 
    }); 
    try{
        const response = await client.post('/v1/auth/signup',inputs,{headers: headers})
        navigate("/login")
    } catch(err){
       setError(err.response.data.exception)
    }
  }

  return (
    <div className = "auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="text" placeholder='email' name = 'email' onChange={handleChange}/>
        <input required type="text" placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register