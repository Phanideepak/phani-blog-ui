import React ,{useState}from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [inputs,setInputs] = useState({
    "username":"",
    "password":"",
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
        const response = await client.post('/v1/auth/login',inputs,{headers: headers})
        navigate("/")
    } catch(err){
       setError(err.response.data.exception)
    }
  }

  return (
    <div className = "auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' name='username' onChange={handleChange} required />
        <input type="text" placeholder='password' name= 'password' onChange={handleChange} required/>
        <button onClick={handleSubmit}>Login</button>
        <p>This is an error !</p>
        <span>Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
